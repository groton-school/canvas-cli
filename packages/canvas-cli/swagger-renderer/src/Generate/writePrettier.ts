import { PathString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { Root } from '@battis/qui-cli.root';
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';

export async function writePrettier(filePath: PathString, content: string) {
  filePath = path.resolve(Root.path(), filePath);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  try {
    fs.writeFileSync(
      filePath,
      await prettier.format(content, {
        filePath,
        ...(await prettier.resolveConfig(filePath))
      })
    );
  } catch (error) {
    Log.error(
      `Error making ${Colors.url(filePath)} prettier: ${(error as Error).message}`
    );
    fs.writeFileSync(filePath, content);
  }
}
