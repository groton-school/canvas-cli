import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import * as Users from './Users.js';

await register(Users);
await Core.run();
