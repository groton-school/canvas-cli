import { confirm, input, select } from '@inquirer/prompts';
import { Canvas } from '@oauth2-cli/canvas';
import { CanvasStudio } from '@oauth2-cli/canvas-studio';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import { Validators } from '@qui-cli/validators';
import fs from 'node:fs';
import open from 'open';
import ora from 'ora';
import { Preferences } from './index.js';

/** Common SIS ID for workspace account, term, and user */
const SIS_ID = '@msar/canvas-import';

let term_id: number | string | undefined = undefined;
let account_id: number | string | undefined = undefined;
let user: Canvas.Users.User | undefined = undefined;
let studio: Canvas.ExternalTools.ContextExternalTool | undefined = undefined;
let studioUser: CanvasStudio.User.User | undefined = undefined;

export async function getTermId(): Promise<
  Canvas.EnrollmentTerms.EnrollmentTerm['id']
> {
  if (!term_id) {
    const terms = (
      await Canvas.v1.Accounts.Terms.list({
        pathParams: { account_id: 1 },
        // @ts-expect-error 2353 per_page does actually work here
        searchParams: { per_page: 200 }
      })
    ).enrollment_terms;
    term_id = terms.reduce(
      (
        id: number | string | undefined,
        term: Canvas.EnrollmentTerms.EnrollmentTerm
      ) => {
        if (term.sis_term_id === SIS_ID) {
          return term.id;
        }
        return id;
      },
      undefined
    );
  }
  if (!term_id) {
    const term = await Canvas.v1.Accounts.Terms.create({
      pathParams: { account_id: 1 },
      params: {
        'enrollment_term[name]': 'Import Workspace',
        'enrollment_term[sis_term_id]': SIS_ID
      }
    });
    term_id = term.id;
    Log.info(
      `Created Canvas term ${Colors.value('Import Workspace')} (ID ${Colors.value(term_id)})`
    );
  }

  return term_id;
}

export async function getAccountId(): Promise<Canvas.Accounts.Account['id']> {
  if (!account_id) {
    const accounts = await Canvas.v1.Accounts.SubAccounts.get({
      pathParams: { account_id: 1 },
      searchParams: { per_page: 200 }
    });
    Log.debug({ accounts });
    account_id = accounts.reduce((id: number | string | undefined, account) => {
      if (account.sis_account_id === SIS_ID) {
        return account.id;
      }
      return id;
    }, undefined);
  }
  if (!account_id) {
    const account = await Canvas.v1.Accounts.SubAccounts.create({
      pathParams: { account_id: 1 },
      params: {
        'account[name]': 'Import Workspace',
        'account[sis_account_id]': SIS_ID
      }
    });
    account_id = account.id;
    Log.info(
      `Created Canvas sub-account ${Colors.value('Import Workspace')} (ID ${Colors.value(account_id)})`
    );
  }
  return account_id;
}

export async function getUser(): Promise<Canvas.Users.User> {
  if (!user) {
    try {
      user = await Canvas.v1.Users.show_user_details({
        pathParams: { id: `sis_user_id:${encodeURIComponent(SIS_ID)}` }
      });
    } catch (error) {
      if (Error.isError(error) && error.message === '404') {
        user = await Canvas.v1.Accounts.Users.create({
          pathParams: { account_id: await getAccountId() },
          params: {
            'user[name]': '@msar/canvas-import',
            'pseudonym[unique_id]': await input({
              message:
                'Enter a valid email address for the workspace user account',
              validate: Validators.email()
            }),
            'pseudonym[sis_user_id]': SIS_ID
          }
        });
      } else {
        throw new Error('Could not access the workspace user', {
          cause: error
        });
      }
    }
  }
  return user;
}

export async function getStudioUser(user?: Canvas.Users.User) {
  if (!studioUser) {
    const result = await CanvasStudio.v1.users.search({
      query: { email: (user || (await getUser())).email }
    });
    if (result.users.length === 1) {
      studioUser = result.users.shift();
    } else if (result.users.length === 0) {
      await enableStudioForUser(await getUser());
      studioUser = (
        await CanvasStudio.v1.users.search({
          query: { email: (await getUser()).email }
        })
      ).users.shift();
    } else {
      studioUser = (
        await CanvasStudio.v1.users.get({
          path: {
            user_id: await select({
              message: 'Choose a user to own imported videos',
              choices: result.users.map((u) => ({
                name: u.display_name,
                value: u.id
              }))
            })
          }
        })
      ).user;
    }
  }
  if (!studioUser) {
    throw new Error('Canvas Studio owner user could not be found');
  }
  return studioUser;
}

async function getStudioInstance() {
  if (!studio) {
    studio = (
      await Canvas.v1.Accounts.ExternalTools.list({
        pathParams: { account_id: 1 },
        searchParams: { search_term: 'Canvas Studio' }
      })
    ).shift();
  }
  if (!studio) {
    throw new Error('Cannot determine installed Canvas Studio instance');
  }
  return studio;
}

async function getStudioGlobalNavUrl() {
  const tool = await getStudioInstance();
  return `${Canvas.plugin.client.instance_url}/accounts/1/external_tools/${tool.id}?launch_type=global_navigation&toolId=studio-${tool.id}`;
}

async function getStudioCourseNavUrl(course: Canvas.Courses.Course) {
  const tool = await getStudioInstance();
  return `${Canvas.plugin.client.instance_url}/courses/${course.id}/external_tools/${tool.id}?`;
}

export async function enableStudioForUser(user: Canvas.Users.User) {
  const masqueradeUrl = `${Canvas.plugin.client.instance_url}/users/${user.id}/masquerade`;
  Log.info(
    `Open ${Colors.url(masqueradeUrl)} in a browser to masquerade as ${user.name}`
  );
  open(masqueradeUrl);
  while (
    !(await confirm({
      message: `Confirm that you are masquerading as ${user.name}`
    }))
  ) {
    // ...
  }
  const studioGlobalNavUrl = await getStudioGlobalNavUrl();
  Log.info(
    `Open ${Colors.url(studioGlobalNavUrl)} to enable Canvas Studio access for ${user.name}`
  );
  open(studioGlobalNavUrl);
  while (
    !(await confirm({
      message: `Confirm that you have visited Canvas Studio as ${user.name}`
    }))
  ) {
    // ...
  }
}

export async function enableStudioForCourse(course: Canvas.Courses.Course) {
  const url = await getStudioCourseNavUrl(course);
  /*
  Log.info(
    `Open ${Colors.url(url)} to enable Canvas Studio access from ${course.name}`
  );
  */
  const spinner = ora(
    `Open ${Colors.url(url)} to enable Canvas Studio access from ${course.name}`
  ).start();
  open(url);
  await new Promise((resolve) => {
    setTimeout(resolve, 15000);
  });
  spinner.succeed();
  /*
  while (
    !(await confirm({
      message: `Confirm that you have visited Canvas Studio from ${course.name}`
    }))
  ) {
    // ...
  }
    */
}

let _canvasStudioIndex: Record<string, number> | undefined = undefined;

function canvasStudioIndex() {
  if (!_canvasStudioIndex) {
    if (fs.existsSync(Preferences.canvasStudioIndex())) {
      _canvasStudioIndex = JSON.parse(
        fs.readFileSync(Preferences.canvasStudioIndex(), 'utf8')
      );
    }
  }
  if (!_canvasStudioIndex) {
    throw new Error(
      `Could not find Canvas Studio JSON index at ${Colors.path(Preferences.canvasStudioIndex())}`
    );
  }
  return _canvasStudioIndex;
}

export function inCanvasStudioIndex(sha1_file_hash?: string) {
  if (sha1_file_hash && sha1_file_hash in canvasStudioIndex()) {
    return canvasStudioIndex()[sha1_file_hash];
  }
}

export function addToCanvasStudioIndex(sha1_file_hash: string, id: number) {
  canvasStudioIndex()[sha1_file_hash] = id;
  fs.writeFileSync(
    Preferences.canvasStudioIndex(),
    JSON.stringify(canvasStudioIndex())
  );
}

export function canvasStudioIndexSize() {
  return Object.getOwnPropertyNames(canvasStudioIndex()).length;
}
