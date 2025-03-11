import type { Item } from '@msar/snapshot-multiple/dist/SnapshotMultiple.d.ts';
import * as Canvas from '../Canvas/index.js';
import * as Content from './Content/index.js';

export type Model = Item['BulletinBoard'];

type ToCanvasArgsOptions = {
  course: Canvas.Courses.Model;
  bulletinBoard: Model;
};

export async function toCanvasArgs({
  course,
  bulletinBoard
}: ToCanvasArgsOptions): Promise<Canvas.Pages.Parameters> {
  let body = '';
  if (bulletinBoard) {
    for (const widget of bulletinBoard) {
      switch (widget.ContentType?.Content) {
        case 'News':
          if (widget.Content) {
            // @ts-ignore-next-line
            body += Content.News.widgetToHTML(widget.Content);
          }
          break;
        case 'Text':
          if (widget.Content) {
            body += await Content.Text.widgetToHTML({
              course,
              // @ts-ignore-next-line
              text: widget.Content
            });
          }
          break;
      }
    }
  }
  return {
    'wiki_page[title]': 'Bulletin Board',
    'wiki_page[body]': body,
    'wiki_page[published]': true,
    'wiki_page[front_page]': true
  };
}
