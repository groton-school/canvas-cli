import { register } from '@qui-cli/plugin';
import { CanvasPlugin } from './CanvasPlugin.js';

export * as Canvas from './Canvas.js';

const canvas = new CanvasPlugin();

await register(canvas);
