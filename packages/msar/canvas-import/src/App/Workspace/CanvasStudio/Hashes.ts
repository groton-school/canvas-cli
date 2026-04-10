import fs from 'node:fs';
import * as Preferences from '../../Preferences.js';

function indexPath() {
  const index = Preferences.canvasStudioIndex();
  if (!index) {
    throw new Error(
      'Cannot proceed without a valid path to a Canvas Studio index'
    );
  }
  return index;
}

let _hashes: Record<string, number> | undefined = undefined;
function hashes() {
  if (!_hashes) {
    if (fs.existsSync(indexPath())) {
      _hashes = JSON.parse(fs.readFileSync(indexPath(), 'utf8'));
    }
  }
  if (!_hashes) {
    return {};
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
  fs.writeFileSync(indexPath(), JSON.stringify(hashes()));
}

export function length() {
  return Object.getOwnPropertyNames(hashes()).length;
}
