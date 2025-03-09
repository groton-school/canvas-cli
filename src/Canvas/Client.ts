import { Canvas, Credentials } from '@oauth2-cli/canvas';

export function stringify(obj: Record<string, any>) {
  const stringified: Record<string, string> = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (const i in obj[key]) {
        if (obj[key][i] !== undefined) {
          stringified[`${key}[]`] = obj[key][i].toString();
        }
      }
    } else {
      if (obj[key] !== undefined) {
        stringified[key] = obj[key].toString();
      }
    }
  }
  return stringified;
}

let _client: Canvas | undefined = undefined;

export function init(credentials: Credentials) {
  _client = new Canvas(credentials);
}
export function canvas() {
  if (!_client) {
    throw new Error(`Canvas client has not been initialiized`);
  }
  return _client;
}
