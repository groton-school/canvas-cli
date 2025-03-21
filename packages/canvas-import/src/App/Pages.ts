import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Canvas from '@groton/canvas-types';
import * as Imported from '@msar/types.import';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

type Options = {
  course: Canvas.Courses.Model;
  section: Imported.Data;
};

export async function importBulletinBoard({ course, section }: Options) {
  if (section.BulletinBoard) {
    const args = await Snapshot.PodiumPage.toCanvasArgs({
      course,
      title: 'Bulletin Board',
      body: section.BulletinBoard,
      layout: section.SectionInfo?.LayoutId || 0,
      front_page: true
    });
    if (section.front_page?.id && Preferences.duplicates() === 'update') {
      if (!Imported.isEqual(args, section.front_page.args)) {
        const frontPage = await Canvas.Pages.update({
          course,
          page: { page_id: section.front_page.id } as Canvas.Pages.Model,
          args
        });
        if (frontPage) {
          section.front_page = {
            id: frontPage.page_id,
            args,
            created_at: frontPage.created_at
          };
        }
      } else {
        Log.info(
          `Page ${Colors.value(args['wiki_page[title]'])} is up-to-date`
        );
      }
    } else {
      const frontPage = await Canvas.Pages.create({ course, args });
      if (frontPage) {
        section.front_page = {
          id: frontPage.page_id,
          args,
          created_at: frontPage.created_at
        };
      }
    }
  }
}

export async function importTopics({ course, section }: Options) {
  if (section.Topics) {
    for (const topic of section.Topics) {
      if (topic.Content) {
        const args = await Snapshot.PodiumPage.toCanvasArgs({
          course,
          title: topic.Name,
          body: topic.Content,
          layout: topic.LayoutId
        });
        let canvasTopic: Canvas.Pages.Model | undefined = undefined;
        if (topic.canvas?.id && Preferences.duplicates() === 'update') {
          if (!Imported.isEqual(args, topic.canvas.args)) {
            canvasTopic = await Canvas.Pages.update({
              course,
              page: { page_id: topic.canvas.id } as Canvas.Pages.Model,
              args
            });
          } else {
            Log.info(`Page ${Colors.value(topic.Name)} is up-to-date`);
          }
        } else {
          canvasTopic = await Canvas.Pages.create({
            course,
            args
          });
        }
        if (canvasTopic) {
          topic.canvas = {
            id: canvasTopic.page_id,
            blackbaud_id: topic.TopicId,
            args,
            created_at: canvasTopic.created_at
          };
        }
      }
    }
  }
}
