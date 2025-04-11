import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Log } from '@battis/qui-cli.log';
import * as Canvas from '@groton/canvas-cli.api';
import * as Imported from '@msar/types.import';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

type Options = {
  course: Canvas.Courses.Course;
  section: Imported.Data;
};

export async function importBulletinBoard({ course, section }: Options) {
  if (section.BulletinBoard) {
    const params = await Snapshot.PodiumPage.toCanvasArgs({
      course,
      section,
      title: 'Bulletin Board',
      body: section.BulletinBoard,
      layout: section.SectionInfo?.LayoutId || 0,
      front_page: true
    });
    if (section.front_page?.id && Preferences.duplicates() === 'update') {
      if (!Imported.isEqual(params, section.front_page.args)) {
        const frontPage = await Canvas.v1.Courses.Pages.update({
          pathParams: {
            course_id: course.id.toString(),
            url_or_id: section.front_page.id.toString()
          },
          params
        });
        if (frontPage) {
          section.front_page = {
            id: frontPage.page_id,
            args: params,
            created_at: frontPage.created_at
          };
        }
      } else {
        Log.info(
          `Page ${Colors.value(params['wiki_page[title]'])} is up-to-date`
        );
      }
    } else {
      const frontPage = await Canvas.v1.Courses.Pages.create({
        pathParams: { course_id: course.id.toString() },
        params
      });
      if (frontPage) {
        section.front_page = {
          id: frontPage.page_id,
          args: params,
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
        const params = await Snapshot.PodiumPage.toCanvasArgs({
          course,
          section,
          title: topic.Name,
          body: topic.Content,
          layout: topic.LayoutId
        });
        let canvasTopic: Canvas.Resources.Page | undefined = undefined;
        if (topic.canvas?.id && Preferences.duplicates() === 'update') {
          if (!Imported.isEqual(params, topic.canvas.args)) {
            canvasTopic = await Canvas.v1.Courses.Pages.update({
              pathParams: {
                course_id: course.id.toString(),
                url_or_id: topic.canvas.id.toString()
              },
              params
            });
          } else {
            Log.info(`Page ${Colors.value(topic.Name)} is up-to-date`);
          }
        } else {
          canvasTopic = await Canvas.v1.Courses.Pages.create({
            pathParams: { course_id: course.id.toString() },
            params
          });
        }
        if (canvasTopic) {
          topic.canvas = {
            id: canvasTopic.page_id,
            blackbaud_id: topic.TopicId,
            args: params,
            created_at: canvasTopic.created_at
          };
        }
      }
    }
  }
}
