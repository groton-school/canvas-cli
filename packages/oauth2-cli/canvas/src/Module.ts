import { init as apiInit } from '@groton/canvas-api';
import { Canvas } from './Canvas.js';

const client = new Canvas();
apiInit(client);

export const name = client.name;
export const configure = client.configure.bind(client);
export const options = client.options.bind(client);
export const init = client.init.bind(client);

export * from '@groton/canvas-api';
