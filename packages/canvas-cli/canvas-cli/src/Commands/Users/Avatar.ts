import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import '@battis/qui-cli.env';
import * as Plugin from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import * as Canvas from '@groton/canvas-cli.api';
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

export const name = 'Users/Avatar';
export const src = path.resolve(import.meta.dirname, '../..');

let csvPath: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  csvPath = Plugin.hydrate(config.csvPath, csvPath);
}

export function options(): Plugin.Options {
  return {
    man: [
      {
        text: `${Colors.value('arg0')} must be the path to a CSV file containing the columns ${Colors.quotedValue(`"user_id"`)} and/or ${Colors.quotedValue(`"sis_user_id"`)} and ${Colors.quotedValue(`"path_to_avatar"`)}.`
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

  const data: Data = parse(
    fs.readFileSync(path.resolve(Root.path(), csvPath)),
    {
      columns: true
    }
  );

  let spinner = ora(`Loading user list from Canvas`).start();
  const users = await Canvas.v1.Accounts.Users.list({
    // FIXME pagination on array response endpoints
    // @ts-expect-error 2353 -- per_page should be declared in api
    pathParams: { account_id: '1', per_page: 100 }
  });
  spinner.succeed(`${users.length} Canvas users loaded`);

  for (const { user_id, sis_user_id, path_to_avatar } of data) {
    spinner = ora(`User ID ${Colors.value(user_id || sis_user_id)}`).start();
    const user = users.find(
      (user) =>
        user.id.toString() === user_id || user.sis_user_id === sis_user_id
    );
    if (!user) {
      spinner.fail(
        `No Canvas user found for user ID ${Colors.value(sis_user_id)}`
      );
      continue;
    } else {
      spinner.text = user.name;
    }
    const file = await Canvas.upload({
      pathParams: { user_id: user.id.toString() },
      params: {
        name: 'avatar.jpg',
        parent_folder_path: 'profile pictures',
        // FIXME masquerade parameters
        // @ts-expect-error 2353 -- need masquerade parameters on all endpoints
        as_user_id: user.id.toString()
      },
      localFilePath: path_to_avatar
    });
    const avatars = await Canvas.v1.Users.Avatars.list({
      pathParams: { user_id: user.id.toString() }
    });
    const token = avatars.find(
      // FIXME Avatars are sometimes Files
      (avatar) => 'uuid' in avatar && avatar.uuid === file.uuid
    )?.token;
    if (token) {
      await Canvas.v1.Users.update({
        pathParams: { id: user.id.toString() },
        params: { 'user[avatar][token]': token }
      });
      spinner.succeed();
    } else {
      spinner.fail();
    }
  }
}
