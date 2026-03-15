import { DateTimeString, PathString } from '@battis/descriptive-types';
import { ArrayElement } from '@battis/typescript-tricks';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import fs from 'node:fs';
import path from 'path';
import * as IndexFile from '../IndexFile.js';

export type Annotated = {
  original: PathString;
  accessed: DateTimeString;
  localPath: PathString;
  filename: string;
};

// FIXME too narrowly defined for reuse
type Model = ArrayElement<
  ArrayElement<NonNullable<Imported.Data['Assignments']>>['DownloadItems']
>;

type Options = {
  file: Model;
  parent_folder_path?: string;
};

export function toCanvasArgs({
  file,
  parent_folder_path = 'Imported Files'
}: Options): Canvas.v1.Courses.Files.uploadFormParameters {
  return {
    name: file.FriendlyFileName || file.FileName,
    parent_folder_path: path.join(
      parent_folder_path,
      path.dirname((file.DownloadUrl as unknown as Annotated).localPath)
    ),
    size: fs.statSync(
      path.join(
        path.dirname(IndexFile.path()),
        (file.DownloadUrl as unknown as Annotated).localPath
      )
    ).size,
    on_duplicate: 'overwrite'
  };
}
