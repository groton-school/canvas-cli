import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';

/** Common SIS ID for workspace account, term, and user */
const SIS_ID = '@msar/canvas-import';

let term_id: number | string | undefined = undefined;
let account_id: number | string | undefined = undefined;
let user_id: number | string | undefined = undefined;

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

export async function getUserId(): Promise<Canvas.Users.User['id']> {
  if (!user_id) {
    let user: Canvas.Users.User | undefined = undefined;
    try {
      user = await Canvas.v1.Users.show_user_details({
        pathParams: { id: `sis_user_id:${encodeURIComponent(SIS_ID)}` }
      });
      user_id = user.id;
    } catch (error) {
      if (Error.isError(error) && error.message === '404') {
        user = await Canvas.v1.Accounts.Users.create({
          pathParams: { account_id: await getAccountId() },
          params: {
            'user[name]': '@msar/canvas-import',
            'pseudonym[unique_id]': SIS_ID,
            'pseudonym[sis_user_id]': SIS_ID
          }
        });
        user_id = user.id;
      } else {
        throw error;
      }
    }
  }
  return user_id;
}
