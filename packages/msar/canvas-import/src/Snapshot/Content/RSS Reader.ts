import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import { Preferences } from '../../App/index.js';

type RSSReaderContainer = Omit<
  NonNullable<Imported.BulletinBoard.Item>,
  'Content'
> & {
  Content: Imported.ContentItem.RSSReader;
};

export function isRSSReaderContainer(
  obj: NonNullable<Imported.BulletinBoard.Item | Imported.Topics.Item>
): obj is RSSReaderContainer {
  return (
    obj && 'ContentType' in obj && obj.ContentType?.Content == 'RSS Reader'
  );
}

type Options = {
  course: Canvas.Courses.Model;
  item: RSSReaderContainer;
};

export async function convertToExternalFeed({ course, item }: Options) {
  const args: Canvas.AnnouncementExternalFeeds.Parameters = {
    url: item.Content.Url,
    verbosity: 'truncate'
  };
  let processed = false;
  if (item.Content.canvas && Preferences.duplicates() === 'update') {
    if (Imported.isEqual(args, item.Content.canvas?.args)) {
      Log.info(`External feed ${Colors.url(args.url)} is up-to-date`);
    } else {
      Log.warning(
        `External feed ${Colors.url(args.url)} needs to be updated: ${Log.syntaxColor({ canvas: item.Content.canvas, args })}`
      );
    }
    processed = true;
  }
  if (!processed) {
    const feed = await Canvas.AnnouncementExternalFeeds.create({
      course,
      args
    });
    if (feed) {
      item.Content.canvas = {
        id: feed.id,
        args,
        created_at: feed.created_at
      };
    }
  }
  return item;
}
