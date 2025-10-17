import { Core } from '@qui-cli/core';
import { register } from '@qui-cli/plugin';
import * as App from './App/index.js';

await register(App);
await Core.run();
