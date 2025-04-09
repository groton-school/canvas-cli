import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { Root } from '@battis/qui-cli.root';
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';

export async function writePrettier(filepath: PathString, content: string) {
  filepath = path.resolve(Root.path(), filepath);
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  try {
    fs.writeFileSync(
      filepath,
      await prettier.format(content, {
        filepath,
        ...(await prettier.resolveConfig(filepath))
      })
    );
  } catch (error) {
    Log.error(
      `Error making ${Colors.url(filepath)} prettier: ${(error as Error).message}`
    );
    fs.writeFileSync(filepath, content);
  }
}
