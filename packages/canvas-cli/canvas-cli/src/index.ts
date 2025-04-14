import { register } from '@battis/qui-cli.plugin';
import { build } from '@battis/qui-cli.structured';
import path from 'node:path';
import * as API from './API.js';

await register(API);
await build({
  fileName: import.meta.filename,
  commandDirPath: path.join(import.meta.dirname, 'Commands'),
  commandName: 'canvas'
});
