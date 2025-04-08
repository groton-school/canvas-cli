import { Core } from '@battis/qui-cli.core';
import { register } from '@battis/qui-cli.plugin';
import { Root } from '@battis/qui-cli.root';
import * as Render from './Render/index.js';

Root.configure({root: process.cwd()});

console.log(process.cwd());

await register(Render);
await Core.run();
