import { register } from '@qui-cli/plugin';
import { plugin } from './Canvas.js';

export * as Canvas from './Canvas.js';

await register(plugin);
