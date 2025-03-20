import { JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import ejs from 'ejs';
import path from 'node:path';
import * as Content from './Content/index.js';
import * as Files from './Files.js';

type ToCanvasArgsOptions = {
  course: Canvas.Courses.Model;
  title: string;
  body: JSONValue[];
  layout: number;
  front_page?: boolean;
};

export async function toCanvasArgs({
  course,
  title,
  body,
  layout,
  front_page = false
}: ToCanvasArgsOptions): Promise<Canvas.Pages.Parameters> {
  for (const i in body) {
    let uploaded = (await Files.uploadLocalFiles({
      course,
      entry: body[i]
    })) as Imported.ContentItem.Any;
    uploaded = await Content.RSSReader.testAndConvert({ course, uploaded });
    body[i] = uploaded;
  }
  return {
    'wiki_page[title]': title,
    'wiki_page[body]': await ejs.renderFile(
      path.join(import.meta.dirname, 'PodiumPage.ejs'),
      {
        course_id: course.id,
        page: body,
        layout
      }
    ),
    'wiki_page[published]': true,
    'wiki_page[front_page]': front_page
  };
}
