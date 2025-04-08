import { PathString } from '@battis/descriptive-types';
import { Log } from '@battis/qui-cli.log';
import path from 'node:path';

export function importPath(from: PathString, to: PathString) {
  let relative = path.relative(path.dirname(from), to);
  if (!/\//.test(relative)) {
    relative = `./${relative}`;
  }
  relative = relative.replace(/\.ts$/, '.js');
  Log.debug({ from, to, relative });
  return relative;
}
