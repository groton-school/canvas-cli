import { JSONValue } from '@battis/typescript-tricks';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import * as Templates from '../Templates/index.js';
import * as Content from './Content/index.js';
import * as Files from './Files.js';

type ToCanvasArgsOptions = {
  course: Canvas.Courses.Model;
  section: Imported.Data;
  title: string;
  body: NonNullable<
    Imported.BulletinBoard.Data | Imported.Topics.Topic['Content']
  >;
  layout: number;
  front_page?: boolean;
};

export async function toCanvasArgs({
  course,
  section,
  title,
  body,
  layout,
  front_page = false
}: ToCanvasArgsOptions): Promise<Canvas.Pages.Parameters> {
  const assignmentIdentifiers: string[] = [];
  for (const i in body) {
    let item: Imported.BulletinBoard.Item | Imported.Topics.Item | undefined =
      (await Files.uploadLocalFiles({
        course,
        entry: body[i] as JSONValue
      })) as Imported.Topics.Item | Imported.BulletinBoard.Item;
    if (Content.RSSReader.isRSSReaderContainer(item)) {
      item = await Content.RSSReader.convertToExternalFeed({
        course,
        item
      });
    } else if (Content.Album.isAlbumContainer(item)) {
      item = await Content.Album.convertToPages({ course, item });
    } else if (Content.Assignment.isAssignmentContainer(item)) {
      const identifiers = Content.Assignment.getIdentifiers(item);
      item.display = !assignmentIdentifiers.includes(identifiers);
      if (item.display) {
        assignmentIdentifiers.push(identifiers);
        item = Content.Assignment.hydrate(item, section.Assignments);
      }
    }
    if (item) {
      body[i] = item;
    }
  }
  return {
    'wiki_page[title]': title,
    'wiki_page[body]': await Templates.render(Templates.Podium.Page, {
      course_id: course.id,
      page: body,
      layout
    }),
    'wiki_page[published]': true,
    'wiki_page[front_page]': front_page
  };
}
