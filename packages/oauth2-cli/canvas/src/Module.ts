import { CanvasPlugin } from './Canvas.js';

export * from './Canvas.js';

const canvas = new CanvasPlugin();

export const name = canvas.name;
export const configure = canvas.configure.bind(canvas);
export const options = canvas.options.bind(canvas);
export const init = canvas.init.bind(canvas);
