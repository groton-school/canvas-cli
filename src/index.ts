import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import * as CanvasImport from './CanvasImport.js';

await register(CanvasImport);
await Core.run();
