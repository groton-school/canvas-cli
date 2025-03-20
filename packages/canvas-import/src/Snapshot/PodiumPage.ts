import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import ejs from 'ejs';
import path from 'node:path';
import { Preferences } from '../App/index.js';
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
    const uploaded = (await Files.uploadLocalFiles({
      course,
      entry: body[i]
    })) as Imported.ContentItem.Any;
    if (
      'ContentType' in uploaded &&
      typeof uploaded.ContentType === 'object' &&
      uploaded.ContentType !== null &&
      'Content' in uploaded.ContentType &&
      uploaded.ContentType.Content === 'RSS Reader' &&
      'Content' in uploaded &&
      typeof uploaded.Content === 'object' &&
      uploaded.Content !== null &&
      'Url' in uploaded.Content &&
      typeof uploaded.Content.Url === 'string'
    ) {
      const args: Canvas.AnnouncementExternalFeeds.Parameters = {
        url: uploaded.Content.Url,
        verbosity: 'truncate'
      };
      let processed = false;
      if ('canvas' in uploaded && Preferences.duplicates() === 'update') {
        if (
          uploaded.canvas &&
          'args' in uploaded.canvas &&
          Imported.isEqual(args, uploaded.canvas?.args)
        ) {
          Log.info(`External feed ${Colors.url(args.url)} is up-to-date`);
          processed = true;
        }
      }
      if (!processed) {
        const feed = await Canvas.AnnouncementExternalFeeds.create({
          course,
          args
        });
        if (feed) {
          (uploaded as Imported.ContentItem.RSSReader).canvas = {
            id: feed.id,
            args,
            created_at: feed.created_at
          };
        }
      }
    }
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
