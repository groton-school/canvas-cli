import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import * as CanvasImportOpen from './CanvasImportOpen.js';

await register(CanvasImportOpen);
await Core.run();
