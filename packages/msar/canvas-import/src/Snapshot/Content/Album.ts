import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import { Preferences } from '../../App/index.js';
import * as Templates from '../../Templates/index.js';

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
    obj &&
    (('ContentType' in obj &&
      (obj.ContentType?.Content == 'Photo' ||
        obj.ContentType?.Content == 'Video' ||
        obj.ContentType?.Content == 'Audio' ||
        obj.ContentType?.Content == 'Media')) ||
      ('ObjectType' in obj &&
        (obj.ObjectType?.Name == 'Photo' ||
          obj.ObjectType?.Name == 'Video' ||
          obj.ObjectType?.Name == 'Audio' ||
          obj.ObjectType?.Name == 'Media')))
  );
}

type Options = {
  course: Canvas.Courses.Model;
  item: AlbumContainer;
};

export async function convertToPages({ course, item }: Options) {
  let albumContent = item.AlbumContent || [];
  if (!Array.isArray(albumContent)) {
    albumContent = [albumContent];
  }
  for (const album of albumContent) {
    const title =
      item.Content?.reduce(
        (title: string | undefined, cover) =>
          cover.AlbumId === album.AlbumId && cover.AlbumName
            ? cover.AlbumName
            : title,
        undefined
      ) ||
      ('ShortDescription' in item && item.ShortDescription) ||
      ('AlbumDescription' in item && item.AlbumDescription) ||
      `${'ContentType' in item ? item.ContentType.Content : item.ObjectType.Name} Album`;
    const args: Canvas.Pages.Parameters = {
      'wiki_page[title]': title,
      'wiki_page[body]': await Templates.render(Templates.Canvas.MediaPage, {
        content: album.Content,
        course_id: course.id
      }),
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
