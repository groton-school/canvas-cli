import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import * as Render from './Render.js';

await register(Render);
await Core.run();
