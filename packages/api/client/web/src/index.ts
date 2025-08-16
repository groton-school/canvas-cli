import * as API from '@groton/canvas-api';
import { Client, Options } from './Client.js';

export * from './Client';

function client() {
  return API.client() as Client;
}

export const Canvas = {
  ...API,
  client,
  init: (options?: Options) => API.init(new Client(options)),
  authorize: () => client().authorize(),
  deauthorize: (redirect?: string) => client().deauthorize(redirect),
  getOwner: () => client().getOwner()
};
