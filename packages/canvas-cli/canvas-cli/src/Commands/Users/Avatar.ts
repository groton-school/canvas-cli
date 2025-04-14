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

type Data = { user_id: string; path_to_avatar: string }[];

export type Configuration = Plugin.Configuration & {
  csvPath?: string;
};

Core.configure({ core: { requirePositionals: true } });

export const name = 'Users/Avatar';
export const src = path.dirname(import.meta.dirname);

let csvPath: string | undefined = undefined;

export function configure(config: Configuration = {}) {
  csvPath = Plugin.hydrate(config.csvPath, csvPath);
}

export function options(): Plugin.Options {
  return {
    man: [
      {
        text: `${Colors.value('arg0')} must be the path to a CSV file containing the columns ${Colors.quotedValue(`"user_id"`)} and ${Colors.quotedValue(`"path_to_avatar"`)}.`
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
  for (const { user_id, path_to_avatar } of data) {
    const spinner = ora(`User ID ${Colors.value(user_id)}`).start();
    const file = await Canvas.upload({
      pathParams: { user_id: user_id },
      params: {
        name: 'avatar.jpg',
        parent_folder_path: 'profile pictures'
      },
      localFilePath: path_to_avatar
    });
    const avatars = await Canvas.v1.Users.Avatars.list({
      pathParams: { user_id }
    });
    const token = avatars.find(
      (avatar) => 'uuid' in avatar && avatar.uuid === file.uuid
    )?.token;
    if (token) {
      await Canvas.v1.Users.update({
        pathParams: { id: user_id },
        params: { 'user[avatar][token]': token }
      });
      spinner.succeed();
    } else {
      spinner.fail();
    }
  }
}