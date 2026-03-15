import { PathString } from '@battis/descriptive-types';
import { JSONValue } from '@battis/typescript-tricks';
import * as Archive from '@msar/types.archive';
import * as Imported from '@msar/types.import';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'path';
import * as IndexFile from '../IndexFile.js';

type HashEntry = {
  hash: string;
  filename?: string;
};

type FileInformation = {
  localPath: PathString;
  filename?: string;
};

const hashes: Record<PathString, HashEntry> = {};

export function get(localPath: PathString) {
  return hashes[localPath].hash;
}

export async function calculate(entry: JSONValue): Promise<JSONValue> {
  if (entry && typeof entry === 'object') {
    if (Array.isArray(entry)) {
      return await Promise.all(entry.map(calculate));
    } else if (Imported.willBeAnnotated(entry)) {
      if (entry.sha1_file_hash && typeof entry.sha1_file_hash === 'string') {
        hashes[entry.localPath] = {
          hash: entry.sha1_file_hash,
          filename: entry.filename
        };
        Log.debug(
          `Reusing stored hash value for ${Colors.url(entry.localPath)}`
        );
      } else if (hashes[entry.localPath]) {
        entry.sha1_file_hash = hashes[entry.localPath].hash;
        Log.debug(
          `Reusing previously calculated hash for ${Colors.url(entry.localPath)}`
        );
      } else {
        const filePath = path.join(
          path.dirname(IndexFile.path()),
          entry.localPath
        );

        const hash = crypto.createHash('sha1').setEncoding('hex');
        const fstream = fs.createReadStream(filePath);
        entry.sha1_file_hash = await new Promise<string>((resolve) => {
          fstream.on('end', () => {
            hash.end();
            resolve(hash.read());
          });
          fstream.pipe(hash);
        });

        if (entry.sha1_file_hash) {
          hashes[entry.localPath] = {
            hash: entry.sha1_file_hash,
            filename: entry.filename
          };
          const message = `Hashed ${Colors.url(entry.localPath)} to ${Colors.value(entry.sha1_file_hash)}`;
          Log.debug(message);
        } else {
          throw new Error(
            `Failed to calculate hash for ${Colors.url(entry.localPath)}`
          );
        }
      }
    } else {
      for (const prop of Object.getOwnPropertyNames(entry)) {
        entry[prop] = await calculate(entry[prop]);
      }
    }
  }
  return entry;
}

export function primary(
  annotation: Archive.Annotation | Imported.Annotation
): FileInformation {
  if ('original_localPath' in annotation) {
    return {
      localPath: annotation.localPath,
      filename: hashes[annotation.localPath].filename
    };
  } else {
    const hash = hashes[annotation.localPath].hash;
    const duplicates = Object.getOwnPropertyNames(hashes).reduce(
      (duplicates, localPath) => {
        if (hashes[localPath].hash === hash) {
          duplicates.push(localPath);
        }
        return duplicates;
      },
      [] as PathString[]
    );
    let primary = duplicates.filter((localPath) => /orig/i.test(localPath))[0];
    if (!primary) {
      primary = duplicates.filter((localPath) => /large/i.test(localPath))[0];
    }
    if (!primary) {
      primary = duplicates[0];
    }
    if (!primary) {
      throw new Error(
        `Error selecting primary file among duplicates: ${Log.syntaxColor({ annotation, primary, duplicates })}`
      );
    }
    Log.debug(
      `Selected ${Colors.url(primary)} as primary from ${Log.syntaxColor(duplicates)}`
    );
    return { localPath: primary, filename: hashes[primary].filename };
  }
}
