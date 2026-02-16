import { register } from '@qui-cli/plugin';
import { plugin } from './CanvasStudio.js';

export * as CanvasStudio from './CanvasStudio.js';

await register(plugin);
