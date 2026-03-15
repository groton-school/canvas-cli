import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import * as Snapshot from '../Snapshot/index.js';
import { log } from './Courses.js';
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
            id: frontPage.page_id.toString(),
            args: params,
            created_at: frontPage.created_at
          };
        }
        log(
          course,
          `Page ${Colors.value(params['wiki_page[title]'])} has been updated`
        );
      } else {
        log(
          course,
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
          id: frontPage.page_id.toString(),
          args: params,
          created_at: frontPage.created_at
        };
        log(course, `Created bulletin board page`);
      }
    }
  }
}

export async function importTopics({ course, section }: Options) {
  if (section.Topics) {
    let topicsModule = (
      await Canvas.v1.Courses.Modules.list({
        pathParams: { course_id: course.id },
        searchParams: { include: ['items'] }
      })
    ).find((m) => m.name === 'Topics');
    for (const topic of section.Topics) {
      if (topic.Content) {
        const params = await Snapshot.PodiumPage.toCanvasArgs({
          course,
          section,
          title: topic.Name,
          body: topic.Content,
          layout: topic.LayoutId
        });
        let canvasTopic: Canvas.Pages.Page | undefined = undefined;
        if (topic.canvas?.id && Preferences.duplicates() === 'update') {
          if (!Imported.isEqual(params, topic.canvas.args)) {
            canvasTopic = await Canvas.v1.Courses.Pages.update({
              pathParams: {
                course_id: course.id.toString(),
                url_or_id: topic.canvas.id.toString()
              },
              params
            });
            log(
              course,
              `Page ${Colors.value(params['wiki_page[title]'])} has been updated`
            );
          } else {
            log(
              course,
              `Page ${Colors.value(params['wiki_page[title]'])} is up-to-date`
            );
          }
        } else {
          canvasTopic = await Canvas.v1.Courses.Pages.create({
            pathParams: { course_id: course.id.toString() },
            params
          });
          log(course, `Created page ${Colors.value(topic.Name)}`);
        }
        if (canvasTopic) {
          if (!topicsModule) {
            topicsModule = await Canvas.v1.Courses.Modules.create({
              pathParams: { course_id: course.id },
              params: { 'module[name]': 'Topics' }
            });
            log(course, `Created ${Colors.value('Topics')} module`);
          }
          topic.canvas = {
            id: canvasTopic.page_id.toString(),
            blackbaud_id: topic.TopicId,
            args: params,
            created_at: canvasTopic.created_at
          };
          const item = topicsModule.items?.find(
            (i) =>
              i.module_item_type === 'Page' &&
              'page_url' in i &&
              i.page_url === canvasTopic.url
          );
          if (item) {
            log(
              course,
              `Page ${Colors.value(canvasTopic.title)} is up-to-date in ${Colors.value('Topics')} module`
            );
          } else {
            await Canvas.v1.Courses.Modules.Items.create({
              pathParams: { course_id: course.id, module_id: topicsModule.id },
              params: {
                'module_item[title]': canvasTopic.title,
                'module_item[type]': 'Page',
                'module_item[page_url]': canvasTopic.url
              }
            });
            log(
              course,
              `Page ${Colors.value(canvasTopic.title)} added to ${Colors.value('Topics')} module`
            );
          }
        }
      }
    }
  }
}
