import { HTMLString } from '@battis/descriptive-types';
import { JSONValue } from '@battis/typescript-tricks';
import { Output } from '@msar/output';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { getUri } from 'get-uri';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { finished } from 'node:stream/promises';
import ora from 'ora';
import probe from 'probe-image-size';
import * as Templates from '../Templates/index.js';
import * as Content from './Content/index.js';
import * as Files from './Files/index.js';

type ToCanvasArgsOptions = {
  user?: Canvas.Users.User;
  course: Canvas.Courses.Course;
  section: Imported.Data;
  title: string;
  body: NonNullable<
    Imported.BulletinBoard.Data | Imported.Topics.Topic['Content']
  >;
  layout: number;
  front_page?: boolean;
};

export async function toCanvasArgs({
  user,
  course,
  section,
  title,
  body,
  layout,
  front_page = false
}: ToCanvasArgsOptions): Promise<
  Partial<Canvas.v1.Courses.Pages.createFormParameters>
> {
  const assignmentIdentifiers: string[] = [];
  for (const i in body) {
    // TODO upload only referenced files
    let item: Imported.BulletinBoard.Item | Imported.Topics.Item | undefined =
      (await Files.uploadLocalFiles({
        user,
        course,
        entry: body[i] as JSONValue
      })) as Imported.Topics.Item | Imported.BulletinBoard.Item;
    if (Content.RSSReader.isRSSReaderContainer(item)) {
      item = await Content.RSSReader.convertToExternalFeed({
        course,
        item
      });
    } else if (Content.Album.isAlbumContainer(item)) {
      item = await Content.Album.convertToPages({
        course,
        item,
        parent: title
      });
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
    'wiki_page[title]': title && title.length > 0 ? title : 'Untitled',
    'wiki_page[body]': await exportDataURIsToFiles(
      await Templates.render(Templates.Podium.Page, {
        instance_url: Canvas.client().instance_url,
        course_id: course.id,
        page: body,
        layout
      }),
      course
    ),
    'wiki_page[published]': true,
    'wiki_page[front_page]': front_page
  };
}

async function exportDataURIsToFiles(
  html: HTMLString,
  course: Canvas.Courses.Course
) {
  for (const { ext, uri } of html
    .matchAll(/<img\s+[^>]*src="(data:image\/([^;]+);[^"]+)"/gm)
    .map((match) => ({ ext: match[2], uri: match[1] }))) {
    const spinner = ora(`  Identified data URI`).start();
    const name =
      crypto.createHash('sha1').update(uri).digest('hex') + `.${ext}`;
    const filePath = path.join(
      path.dirname(Output.outputPath()),
      'data-uris/courses',
      course.sis_course_id,
      name
    );
    const localPath = filePath.replace(/.*\/(data-uris\/courses\/.*)$/, '$1');
    let file: Canvas.Files.File | undefined = undefined;
    if (fs.existsSync(filePath)) {
      spinner.text = `  Data URI exists at ${Colors.path(localPath)}`;
      file = (
        await Canvas.v1.Courses.Files.list({
          path: { course_id: course.id },
          query: { search_term: name }
        })
      ).shift();
      if (!file) {
        spinner.text = `  Data URI at ${Colors.path(localPath)} not yet uploaded`;
      }
    }
    if (!file) {
      const stream = await getUri(uri);
      // TODO it would be nice to hash these data URIs for possible reuse
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      spinner.text = `  Writing data URI to ${Colors.path(localPath)}`;
      await finished(stream.pipe(fs.createWriteStream(filePath)));
      spinner.text = `  Uploading ${Colors.path(localPath)} to ${Colors.value(`Imported Files/data-uri/${name}}`)}`;
      file = await Canvas.v1.Courses.Files.upload({
        path: { course_id: course.id },
        file: { filePath },
        body: {
          parent_folder_path: 'Imported Files/data-uri',
          name,
          size: fs.statSync(filePath).size,
          on_duplicate: 'overwrite'
        }
      });
    }

    spinner.text = `  Replacing data URI in text with reference to uploaded ${Colors.value(name)}`;
    const dimensions = await scaleImageTo(filePath);
    html = html.replaceAll(
      `src="${uri}"`,
      `id="${file.id}" src="/courses/${course.id}/files/${file.id}/preview" width="${dimensions.width}" height="${dimensions.height}"`
    );
    spinner.succeed(`  Data URI replaced with ${Colors.value(name)}`);
  }
  return html;
}

async function scaleImageTo(filePath: string, maxWidth = 800, maxHeight = 600) {
  const dimensions = await probe(fs.createReadStream(filePath));
  const scale =
    dimensions.width > dimensions.height
      ? dimensions.width > maxWidth
        ? maxWidth / dimensions.width
        : 1
      : dimensions.height > maxHeight
        ? maxHeight / dimensions.width
        : 1;
  if (scale != 1) {
    dimensions.width *= scale;
    dimensions.height *= scale;
  }
  return dimensions;
}
