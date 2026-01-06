import * as Canvas from '@groton/canvas-api';
import { Client } from './Client.js';

const client = new Client();
Canvas.init(client);

export const name = client.name;
export const configure = client.configure;
export const options = client.options;
export const init = client.init;

export * from '@groton/canvas-api';
