import { init as apiInit } from '@groton/canvas-api';
import { Client, Options } from './Client.js';

export * as Canvas from '@groton/canvas-api';
export * from './Client.js';

export function init(options: Options) {
  apiInit(new Client(options));
}
