import { JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import ejs from 'ejs';
import path from 'node:path';
import PQueue from 'p-queue';
import * as IndexFile from './IndexFile.js';

type ToCanvasArgsOptions = {
  course: Canvas.Courses.Model;
  title: string;
  body: JSONValue[];
  layout: number;
  front_page?: boolean;
};

type FileUploadOptions = {
  course: Canvas.Courses.Model;
  entry: JSONValue;
  name?: string;
};

const cache: Record<string, Canvas.Files.Model> = {};

async function fileUpload({
  course,
  entry,
  name
}: FileUploadOptions): Promise<JSONValue> {
  let result: JSONValue;
  if (typeof entry !== 'object' || entry === null) {
    return entry;
  }

  if (
    'localPath' in entry &&
    typeof entry.localPath === 'string' &&
    'filename' in entry &&
    typeof entry.filename === 'string'
  ) {
    if (!cache[entry.localPath]) {
      cache[entry.localPath] = await Canvas.Files.upload({
        course,
        localFilePath: path.join(
          path.dirname(IndexFile.path()),
          entry.localPath.replace(/^\//, '')
        ),
        args: {
          parent_folder_path: path.join(
            'Imported Files',
            path.dirname(entry.localPath.replace(/^\//, ''))
          ),
          name: name || entry.filename
        }
      });
    }
    return cache[entry.localPath];
  }

  if (Array.isArray(entry)) {
    result = [];
    for (const elt of entry) {
      result.push(await fileUpload({ course, entry: elt }));
    }
  } else {
    result = {};
    for (const key in entry) {
      result[key] = await fileUpload({
        course,
        entry: entry[key],
        name:
          typeof entry.FriendlyFileName === 'string'
            ? entry.FriendlyFileName
            : undefined
      });
    }
  }
  return result;
}

export async function toCanvasArgs({
  course,
  title,
  body,
  layout,
  front_page = false
}: ToCanvasArgsOptions): Promise<Canvas.Pages.Parameters> {
  const page = await Promise.all(
    body?.map(async (entry) => await fileUpload({ course, entry })) || []
  );
  return {
    'wiki_page[title]': title,
    'wiki_page[body]': await ejs.renderFile(
      path.join(import.meta.dirname, 'PodiumPage.ejs'),
      {
        page,
        layout
      }
    ),
    'wiki_page[published]': true,
    'wiki_page[front_page]': front_page
  };
}
