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
  csvPath?: string;
};

Positionals.require({
  csvPath: { description: `Path to CSV file of avatar image paths` }
});
Positionals.allowOnlyNamedArgs();

export const name = 'avatar';

let csvPath: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  csvPath = Plugin.hydrate(config.csvPath, csvPath);
}

export function options(): Plugin.Options {
  return {
    man: [
      {
        text:
          `${Colors.positionalArg('arg0')} must be the path to a CSV file ` +
          `containing the columns ${Colors.quotedValue(`"user_id"`)} and/or ` +
          `${Colors.quotedValue(`"sis_user_id"`)} and absolute ` +
          `${Colors.quotedValue(`"path_to_avatar"`)} (or relative to the CSV ` +
          `file).`
      }
    ]
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  const csvPath = Positionals.get('csvPath');
  Canvas.plugin.configure({
    reason: path.basename(import.meta.filename, '.js')
  });
  configure({ csvPath, ...values });
}

export async function run() {
  if (!csvPath) {
    throw new Error(`${Colors.value('arg0')} CSV path must be defined`);
  }
  const data: Data = parse(
    fs.readFileSync(path.resolve(Root.path(), csvPath)),
    {
      columns: true
    }
  );

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
      path.dirname(csvPath),
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
