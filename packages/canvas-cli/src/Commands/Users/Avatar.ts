import { confirm, input, select } from '@inquirer/prompts';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Positionals } from '@qui-cli/core';
import * as Plugin from '@qui-cli/plugin';
import { Root } from '@qui-cli/root';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';

type Data = {
  user_id?: string;
  sis_user_id?: string;
  path_to_avatar: string;
}[];

export type Configuration = Plugin.Configuration & {
  filePath?: string;
  user?: string;
};

Positionals.require({
  filePath: {
    description:
      `Path to a CSV file ` +
      `containing the columns ${Colors.quotedValue(`"user_id"`)} and/or ` +
      `${Colors.quotedValue(`"sis_user_id"`)} and absolute ` +
      `${Colors.quotedValue(`"path_to_avatar"`)} (or relative to the CSV ` +
      `file).`
  },
  user: { description: `Optional user email` }
});
Positionals.allowOnlyNamedArgs();
Positionals.requireAtLeast(1);

export const name = 'avatar';

const config: Configuration = {};

export function configure(proposal: Configuration = {}) {
  for (const key in proposal) {
    if (proposal[key] !== undefined) {
      config[key] = proposal[key];
    }
  }
}

export function options(): Plugin.Options {
  return {
    man: [{ level: 1, text: 'Avatar Options' }]
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  const filePath = Positionals.get('filePath');
  const user = Positionals.get('user');
  Canvas.plugin.configure({
    reason: path.basename(import.meta.filename, '.js')
  });
  configure({ filePath, user, ...values });
}

export async function run() {
  if (!config.filePath) {
    throw new Error(`${Colors.positionalArg('filePath')} path must be defined`);
  }
  let data: Data = [];
  do {
    if (config.user) {
      const choices = await Canvas.v1.Accounts.Users.list({
        path: { account_id: 1 },
        query: { search_term: config.user }
      });
      if (choices.length > 1) {
        const sis_user_id = await select({
          message: 'Choose yser',
          choices: choices.map((c) => ({
            name: `${c.name} (SIS ID ${c.sis_user_id})`,
            value: c.sis_user_id
          }))
        });
        data = [{ sis_user_id, path_to_avatar: config.filePath }];
      } else if (choices.length === 1) {
        const [user] = choices;
        if (
          await confirm({
            message: `Set ${user.name} (SIS ID ${user.sis_user_id}) to ${config.filePath}`
          })
        ) {
          data = [
            { sis_user_id: user.sis_user_id, path_to_avatar: config.filePath }
          ];
        }
      } else {
        configure({
          user: await input({
            message: `"${config.user}" matched no users. Enter a different search term?`
          })
        });
      }
    } else {
      data = parse(
        fs.readFileSync(path.resolve(process.cwd(), config.filePath)),
        {
          columns: true
        }
      );
    }
  } while (data.length === 0 && !(await confirm({ message: 'abort?' })));

  let spinner = ora(`Loading user list from Canvas`).start();
  const users = await Canvas.v1.Accounts.Users.list({
    path: { account_id: '1' },
    query: { per_page: 100 }
  });
  spinner.succeed(`${users.length} Canvas users loaded`);

  for (const { user_id, sis_user_id, path_to_avatar } of data) {
    spinner = ora(`User ID ${Colors.value(user_id || sis_user_id)}`).start();
    const user = users.find(
      (user) => user.id == user_id || user.sis_user_id === sis_user_id
    );
    if (!user) {
      spinner.fail(
        `No Canvas user found for user ID ${Colors.value(user_id || sis_user_id)}`
      );
      continue;
    } else {
      spinner.text = user.name;
    }
    const filePath = path.resolve(
      Root.path(),
      path.dirname(config.filePath),
      path_to_avatar
    );
    const name = `avatar${path.extname(path_to_avatar)}`.toLowerCase();
    const file = await Canvas.v1.Users.Files.upload({
      path: { user_id: user.id },
      body: {
        name,
        parent_folder_path: 'profile pictures',
        as_user_id: user.id
      },
      file: { filePath }
    });
    for (const avatar of await Canvas.v1.Users.Avatars.list({
      path: { user_id: user.id }
    })) {
      if (avatar.display_name === file.display_name) {
        await Canvas.v1.Users.update({
          path: { id: user.id },
          body: {
            'user[avatar][token]': avatar.token
          }
        });
        await Canvas.v1.Users.update({
          path: { id: user.id },
          body: {
            'user[avatar][state]': 'approved'
          }
        });
        spinner.succeed(
          `${Colors.value(user.name)}'s avatar set to ${Colors.path(path.basename(path_to_avatar))}`
        );
        break;
      }
    }
    if (spinner.isSpinning) {
      spinner.fail(Colors.error(user.name));
    }
  }
}
