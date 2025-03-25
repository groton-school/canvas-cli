import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import ejs from 'ejs';
import path from 'node:path';
import { Preferences } from '../../App/index.js';

type AlbumContainer =
  | (NonNullable<Imported.BulletinBoard.Item> & {
      ContentType: { Content: 'Photo' | 'Video' | 'Audio' | 'Media' };
      Content?: Imported.ContentItem.Media[];
      AlbumContent?: Imported.AlbumContent.Item[];
    })
  | (NonNullable<Imported.Topics.Item> & {
      ObjectType: { Name: 'Photo' | 'Video' | 'Audio' | 'Media' };
      Content?: Imported.ContentItem.Media[];
      AlbumContent?: Imported.AlbumContent.Data;
    });

export function isAlbumContainer(
  obj: NonNullable<Imported.BulletinBoard.Item | Imported.Topics.Item>
): obj is AlbumContainer {
  return (
    ('ContentType' in obj &&
      (obj.ContentType?.Content == 'Photo' ||
        obj.ContentType?.Content == 'Video' ||
        obj.ContentType?.Content == 'Audio' ||
        obj.ContentType?.Content == 'Media')) ||
    ('ObjectType' in obj &&
      (obj.ObjectType?.Name == 'Photo' ||
        obj.ObjectType?.Name == 'Video' ||
        obj.ObjectType?.Name == 'Audio' ||
        obj.ObjectType?.Name == 'Media'))
  );
}

type Options = {
  course: Canvas.Courses.Model;
  item: AlbumContainer;
};

export async function convertToPages({ course, item }: Options) {
  for (const album of item.AlbumContent || []) {
    const title =
      item.Content?.reduce(
        (title: string | undefined, cover) =>
          cover.AlbumId === album.AlbumId && cover.AlbumName
            ? cover.AlbumName
            : title,
        undefined
      ) ||
      `${'ContentType' in item ? item.ContentType.Content : item.ObjectType.Name} Album`;
    const args: Canvas.Pages.Parameters = {
      'wiki_page[title]': title,
      'wiki_page[body]': await ejs.renderFile(
        path.join(import.meta.dirname, 'Canvas/Album.ejs'),
        { content: album.Content, course_id: course.id },
        { rmWhitespace: true }
      ),
      'wiki_page[published]': true
    };
    let processed = false;
    if (album.canvas?.id && Preferences.duplicates() == 'update') {
      if (!Imported.isEqual(args, album.canvas.args)) {
        const result = await Canvas.Pages.update({
          course,
          page: { page_id: album.canvas.id } as Canvas.Pages.Model,
          args
        });
        if (result) {
          album.canvas.args = args;
        }
      } else {
        Log.info(`Album page ${Colors.value(title)} is up-to-date`);
      }
      processed = true;
    }
    if (!processed) {
      const result = await Canvas.Pages.create({ course, args });
      if (result) {
        album.canvas = {
          id: result.page_id,
          url: result.url,
          args,
          created_at: result.created_at
        };
      }
    }
  }
  return item;
}
