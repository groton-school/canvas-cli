import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import { Preferences } from '../App/index.js';

type Options = {
  course: Canvas.Courses.Model;
  uploaded: Imported.ContentItem.Any;
};

export async function testAndConvert({ course, uploaded }: Options) {
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
  return uploaded;
}
