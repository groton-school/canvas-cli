import { PathString } from '@battis/descriptive-types';
import path from 'node:path';

export function importPath(from: PathString, to: PathString) {
  if (to.charAt(0) === '#') {
    return to;
  }
  let relative = path.relative(path.dirname(from), to);
  if (!/^\./.test(relative)) {
    relative = `./${relative}`;
  }
  relative = relative.replace(/\.ts$/, '.js');
  return relative;
}
