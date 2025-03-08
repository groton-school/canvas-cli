import { ArrayElement } from '@battis/typescript-tricks';
import { Item } from '@msar/snapshot-multiple/dist/SnapshotMultiple.js';
import path from 'node:path';
import * as Canvas from '../Canvas.js';
import { Annotated } from './Url.js';

// TODO can this File model be generalized?
type Model = ArrayElement<
  ArrayElement<NonNullable<Item['Assignments']>>['DownloadItems']
>;

type ToCanvasArgsOptions = {
  file: Model;
  parent_folder_path?: string;
};

export function toCanvasArgs({
  file,
  parent_folder_path = 'Imported Files'
}: ToCanvasArgsOptions): Canvas.Files.Parameters {
  return {
    name: file.FriendlyFileName || file.FileName,
    parent_folder_path: path.join(
      parent_folder_path,
      (file.DownloadUrl as unknown as Annotated).localPath
    ),
    on_duplicate: 'overwrite'
  };
}
