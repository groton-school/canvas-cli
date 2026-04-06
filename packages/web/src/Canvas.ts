import * as API from '@groton/canvas-api';
import { Client, Options } from './Client.js';

export * from '@groton/canvas-api/dist/Endpoints/index.js';
export * from '@groton/canvas-api/dist/Resources/index.js';

export function client() {
  return API.client() as Client;
}

export function init(options?: Options) {
  return API.init(new Client(options));
}

export function authorize() {
  return client().authorize();
}

export function deauthorize(redirect?: string) {
  return client().deauthorize(redirect);
}

export function getOwner() {
  return client().getOwner();
}
