import { Core } from '@qui-cli/core';
import { register } from '@qui-cli/plugin';
import * as CanvasImportOpen from './CanvasImportOpen.js';

await register(CanvasImportOpen);
await Core.run();
