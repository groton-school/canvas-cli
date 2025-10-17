import { Core } from '@qui-cli/core';
import { register } from '@qui-cli/plugin';
import * as Render from './Render.js';

await register(Render);
await Core.run();
