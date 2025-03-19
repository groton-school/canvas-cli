import { Colors } from '@battis/qui-cli.colors';
import { Core } from '@battis/qui-cli.core';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Plugin from '@battis/qui-cli.plugin';
import * as Imported from '@msar/types.import';
import fs from 'node:fs';
import path from 'node:path';
import open from 'open';

export type Configuration = { snapshotPath?: string; open?: boolean };

export const name = 'canvas-import-open';
export const src = import.meta.dirname;

let snapshotPath: string | undefined = undefined;
let _open = false;

Core.configure({ core: { requirePositionals: 1 } });

export function configure(config: Configuration = {}) {
  snapshotPath = Plugin.hydrate(config.snapshotPath, snapshotPath);
  _open = Plugin.hydrate(config.open, _open);
}

export function options(): Plugin.Options {
  return {
    flag: {
      open: {
        description: `Open, rather than displaying, the URLs (default ${Colors.value(_open)})`,
        default: _open
      }
    },
    man: [
      { text: `Open the imported canvas courses found in an index JSON file.` }
    ]
  };
}

export function init({
  positionals: [arg0],
  values
}: Plugin.ExpectedArguments<typeof options>) {
  configure({ snapshotPath: arg0, ...values });
}

export function run() {
  if (!snapshotPath) {
    throw new Error(`Snapshot path ${Colors.value('arg0')} is not defined`);
  }
  const snapshots = JSON.parse(
    fs.readFileSync(path.resolve(process.cwd(), snapshotPath)).toString()
  ) as Imported.Multiple.Data;
  for (const snapshot of snapshots) {
    if (snapshot.SectionInfo?.canvas?.id) {
      const url = `${process.env.CANVAS_INSTANCE_URL}/courses/${snapshot.SectionInfo.canvas.id}`;
      Log.info(
        Colors.url(`${Colors.value(snapshot.SectionInfo?.GroupName)} ${url}`)
      );
      if (_open) {
        open(url);
      }
    } else {
      Log.warning(
        `${Colors.value(snapshot.SectionInfo?.GroupName)} has no url`
      );
    }
  }
}
