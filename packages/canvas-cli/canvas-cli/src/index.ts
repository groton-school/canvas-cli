import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import fs from 'node:fs';
import path from 'node:path';

const [command] = process.argv.splice(2, 1);

const commands = fs
  .readdirSync(path.join(import.meta.dirname, 'commands'))
  .filter((f) => !/\.map$/.test(f))
  .map((command) => command.replace(/\.[jt]s$/, ''));
const ext =
  path.basename(path.resolve(import.meta.dirname)) === 'dist' ? 'js' : 'ts';
const filename = `${command}.${ext}`;
if (commands.includes(command)) {
  process.argv[1] = path.join(import.meta.dirname, 'commands', filename);
  import(process.argv[1]);
} else if (/^-?-h(elp)?$/.test(command)) {
  Log.info(`Usage:
  ${path.basename(process.argv[1])} command -h --help

  Available commands: ${commands.map((command) => Colors.value(command)).join(', ')}

  -h --help         Usage`);
}
