import * as Canvas from '@groton/canvas-types';
import { api } from 'datadirect';
import path from 'node:path';
import * as IndexFile from '../IndexFile.js';
import { Annotated } from '../Url.js';

type ItemToHTMLOptions = {
  course: Canvas.Courses.Model;
  text: api.datadirect.ContentItem.Text.Text;
};

async function itemToHTML({ course, text }: ItemToHTMLOptions) {
  let body = text.LongText;
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
        args: { name: photo.OriginalFilename }
      });
      body = `<img src="${Canvas.url(file.url)}" alt="${photo.photo_alttext}"/>${body}`;
    }
  }
  return `<dt class="title">${text.Description}</dt><dd class="body">${body}</dd>`;
}

type WidgetToHtmlOptions = {
  course: Canvas.Courses.Model;
  text: api.datadirect.ContentItem.Text.Content;
};

export async function widgetToHTML({ course, text }: WidgetToHtmlOptions) {
  return `<dl class="blackbaud datadirect content text">${(await Promise.all(text.map(async (t) => await itemToHTML({ course, text: t })))).join('')}</dl>`;
}
