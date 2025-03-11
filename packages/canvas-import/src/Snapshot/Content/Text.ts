import * as Canvas from '@groton/canvas-types';
import { api } from 'datadirect';
import ejs from 'ejs';
import path from 'node:path';
import * as IndexFile from '../IndexFile.js';
import { Annotated } from '../Url.js';

type ItemToHTMLOptions = {
  course: Canvas.Courses.Model;
  text: api.datadirect.ContentItem.Text.Text;
};

async function itemToHTML({ course, text }: ItemToHTMLOptions) {
  const photos: Record<string, unknown>[] = [];
  if (text.Photos) {
    for (const photo of text.Photos) {
      const file = await Canvas.Files.upload({
        course,
        localFilePath: path.resolve(
          path.dirname(IndexFile.path()),
          (photo.LargeFilenameUrl as unknown as Annotated).localPath.replace(
            /^\//,
            ''
          )
        ),
        args: {
          name: photo.OriginalFilename,
          parent_folder_path: path.join(
            'Imported Files',
            path.dirname(
              (
                photo.LargeFilenameUrl as unknown as Annotated
              ).localPath.replace(/^\//, '')
            )
          )
        }
      });
      photos.push({
        ...photo,
        src: Canvas.url(file.url).href
      });
    }
  }
  return ejs.renderFile(path.join(import.meta.dirname, 'Text.ejs'), {
    text,
    photos
  });
}

type WidgetToHtmlOptions = {
  course: Canvas.Courses.Model;
  text: api.datadirect.ContentItem.Text.Content;
};

export async function toHTML({ course, text }: WidgetToHtmlOptions) {
  return (
    await Promise.all(
      text.map(async (t) => await itemToHTML({ course, text: t }))
    )
  ).join('');
}
