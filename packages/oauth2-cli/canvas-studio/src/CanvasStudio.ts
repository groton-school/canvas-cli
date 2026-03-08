import { CanvasStudioPlugin } from './CanvasStudioPlugin.js';

export * as Token from '@oauth2-cli/qui-cli/dist/Token/index.js';
export * from './CanvasStudioPlugin.js';
export * from './Endpoints/index.js';
export * from './Resources/index.js';
export * from './uploadLocalFile.js';

export const plugin = new CanvasStudioPlugin();
