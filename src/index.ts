import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import * as App from './App.js';

await register(App);
await Core.run();
