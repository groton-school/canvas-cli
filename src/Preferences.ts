import { hydrate } from '@battis/qui-cli.plugin';

let _files = true;

export function setFiles(value?: boolean) {
  _files = hydrate(value, _files);
}

export function files() {
  return _files;
}

let _ignoreErrors = true;

export function setIgnoreErrors(value?: boolean) {
  _ignoreErrors = hydrate(value, _ignoreErrors);
}

export function ignoreErrors() {
  return _ignoreErrors;
}
