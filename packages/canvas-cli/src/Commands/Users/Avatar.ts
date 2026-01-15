import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Core } from '@qui-cli/core';
import { Log } from '@qui-cli/log';
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

Core.configure({ core: { requirePositionals: true } });

export const name = 'avatar';

let csvPath: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  csvPath = Plugin.hydrate(config.csvPath, csvPath);
}

export function options(): Plugin.Options {
  return {
    man: [
      {
        text: `${Colors.positionalArg('arg0')} must be the path to a CSV file containing the columns ${Colors.quotedValue(`"user_id"`)} and/or ${Colors.quotedValue(`"sis_user_id"`)} and ${Colors.quotedValue(`"path_to_avatar"`)}.`
      }
    ]
  };
}

export function init(args: Plugin.ExpectedArguments<typeof options>) {
  const {
    positionals: [csvPath]
  } = args;
  configure({ csvPath, ...args.values });
}

export async function run() {
  if (!csvPath) {
    throw new Error(`${Colors.value('arg0')} CSV path must be defined`);
  }
  try {
    const data: Data = parse(
      fs.readFileSync(path.resolve(Root.path(), csvPath)),
      {
        columns: true
      }
    );

    let spinner = ora(`Loading user list from Canvas`).start();
    const users = await Canvas.v1.Accounts.Users.list({
      pathParams: { account_id: '1' },
      searchParams: { per_page: 100 }
    });
    spinner.succeed(`${users.length} Canvas users loaded`);

    for (const { user_id, sis_user_id, path_to_avatar } of data) {
      spinner = ora(`User ID ${Colors.value(user_id || sis_user_id)}`).start();
      const user = users.find(
        (user) => user.id == user_id || user.sis_user_id === sis_user_id
      );
      if (!user) {
        spinner.fail(
          `No Canvas user found for user ID ${Colors.value(sis_user_id)}`
        );
        continue;
      } else {
        spinner.text = user.name;
      }
      try {
        const file = await Canvas.v1.Users.Files.upload({
          pathParams: { user_id: user.id },
          params: {
            name: 'avatar.jpg',
            parent_folder_path: 'profile pictures',
            as_user_id: user.id
          },
          file: { filePath: path_to_avatar }
        });
        const avatars = await Canvas.v1.Users.Avatars.list({
          pathParams: { user_id: user.id }
        });
        const token = avatars.find(
          // FIXME Avatars are sometimes Files
          // @ts-expect-error 2339 bad spec from Instructure
          (avatar) => 'uuid' in avatar && avatar.uuid === file.uuid
        )?.token;
        if (token) {
          await Canvas.v1.Users.update({
            pathParams: { id: user.id },
            params: { 'user[avatar][token]': token }
          });
          spinner.succeed();
        } else {
          spinner.fail();
        }
      } catch (error) {
        Log.error(Colors.error((error as Error).message));
      }
    }
  } catch (error) {
    Log.error({ error });
  }
}
