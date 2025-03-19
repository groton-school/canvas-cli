import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import * as Opener from './Opener.js';

await register(Opener);
await Core.run();
