import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import * as CanvasAssignments from './CanvasAssignments.js';

await register(CanvasAssignments);
await Core.run();
