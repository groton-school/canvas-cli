import { hydrate } from '@qui-cli/plugin';

let _path: string | undefined = undefined;

export function setPath(value?: string) {
  _path = hydrate(value, _path);
}

export function path() {
  if (!_path) {
    throw new Error(`Snapshot path has not been initialized`);
  }
  return _path;
}
