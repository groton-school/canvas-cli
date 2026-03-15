import { Colors } from '@qui-cli/colors';
import fs from 'node:fs';
import * as Preferences from '../../Preferences.js';

let _hashes: Record<string, number> | undefined = undefined;
function hashes() {
  if (!_hashes) {
    if (fs.existsSync(Preferences.canvasStudioIndex())) {
      _hashes = JSON.parse(
        fs.readFileSync(Preferences.canvasStudioIndex(), 'utf8')
      );
    }
  }
  if (!_hashes) {
    throw new Error(
      `Could not find Canvas Studio JSON index at ${Colors.path(Preferences.canvasStudioIndex())}`
    );
  }
  return _hashes;
}

export function get(sha1_file_hash?: string) {
  if (sha1_file_hash && sha1_file_hash in hashes()) {
    return hashes()[sha1_file_hash];
  }
  return undefined;
}

export function set(sha1_file_hash: string, id: number) {
  hashes()[sha1_file_hash] = id;
  fs.writeFileSync(Preferences.canvasStudioIndex(), JSON.stringify(hashes()));
}

export function length() {
  return Object.getOwnPropertyNames(hashes()).length;
}
