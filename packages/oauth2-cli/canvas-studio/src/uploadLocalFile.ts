import { PathString } from '@battis/descriptive-types';
import { Log } from '@qui-cli/log';
import fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import {
  complete,
  CompleteOptions,
  uploads,
  UploadsOptions
} from './Endpoints/v1/media/uploads.js';
import { Media } from './Resources/Media.js';

export type UploadLocalFileOptions = {
  /** Path to local file (absolute or relative to the current working directory) */
  file_path: PathString;
} & UploadsOptions['body'] &
  CompleteOptions['body'];

export async function uploadLocalFile({
  file_path,
  user_id,
  ...body
}: UploadLocalFileOptions): Promise<Media> {
  const { upload } = await uploads({ body: { user_id } });
  file_path = path.resolve(process.cwd(), file_path);
  const headers = {
    'content-type': `video/${path
      .extname(file_path)
      .toLowerCase()
      .replace(/^\./, '')}`,
    'content-length': fs.statSync(file_path).size
  };
  Log.debug(
    `Uploading video to Canvas Studio: ${Log.syntaxColor({
      ...upload,
      method: 'PUT',
      headers,
      file_path
    })}`
  );
  await new Promise((resolve, reject) => {
    fs.createReadStream(file_path).pipe(
      https
        .request(upload.url, {
          method: 'PUT',
          headers
        })
        .on('information', Log.debug)
        .on('response', (res) =>
          Log.debug(
            `Canvas studio upload response:\n${Log.syntaxColor({
              statusCode: res.statusCode,
              statusMessage: res.statusMessage,
              headers: res.headers
            })}`
          )
        )
        .on('error', reject)
        .on('close', resolve)
    );
  });
  return (
    await complete({
      path: { media_id: upload.id },
      body
    })
  ).media;
}
