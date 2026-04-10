import { JSONObject } from '@battis/typescript-tricks';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { kebabCase } from 'change-case';
import path from 'node:path';
import * as Snapshot from '../Snapshot/index.js';
import * as Templates from '../Templates/index.js';
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
          path: {
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
        path: { course_id: course.id.toString() },
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
  // @ts-expect-error 2339
  const toc: Imported.CanvasData['toc']['entries'] = [];

  if (section.Topics) {
    // @ts-expect-error 2352 typing is wrong
    let topicsModule: Canvas.Modules.Module | Canvas.CoursePace.Module = (
      await Canvas.v1.Courses.Modules.list({
        path: { course_id: course.id },
        query: { include: ['items'] }
      })
    ).find((m) => m.name === 'Topics') as Canvas.Modules.Module;
    if (topicsModule && !topicsModule.published) {
      await Canvas.v1.Courses.Modules.update({
        path: { course_id: course.id, id: topicsModule.id },
        body: { 'module[published]': true }
      });
      log(course, `Published ${Colors.value('Topics')} module`);
    }
    const noTopicsModule = !topicsModule;
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
              path: {
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
            path: { course_id: course.id.toString() },
            params
          });
          log(course, `Created page ${Colors.value(topic.Name)}`);
        }

        if (canvasTopic || (topic.canvas?.id && noTopicsModule)) {
          if (!canvasTopic && topic.canvas?.id) {
            canvasTopic = await Canvas.v1.Courses.Pages.show_page_courses({
              path: { course_id: course.id, url_or_id: topic.canvas.id }
            });
          }
          if (!canvasTopic) {
            throw new Error(
              'A canvas topic that was created, indexed, and just retrieved still does not exist'
            );
          }
          if (!topicsModule) {
            topicsModule = await Canvas.v1.Courses.Modules.create({
              path: { course_id: course.id },
              body: { 'module[name]': 'Topics' }
            });
            await Canvas.v1.Courses.Modules.update({
              path: { course_id: course.id, id: topicsModule.id },
              body: { 'module[published]': true }
            });
            log(
              course,
              `Created and published ${Colors.value('Topics')} module`
            );
          }
          const prevUrl =
            topic.canvas?.url ||
            (topic.canvas?.args['wiki_page[title]']
              ? kebabCase(topic.canvas.args['wiki_page[title]'] as string)
              : undefined);
          topic.canvas = {
            id: canvasTopic.page_id.toString(),
            blackbaud_id: topic.TopicId,
            args: params,
            created_at: canvasTopic.created_at,
            url: canvasTopic.url
          };
          const item = topicsModule.items?.find(
            (i) =>
              // @ts-expect-error 2339 it's there
              i.module_item_type === 'Page' &&
              'page_url' in i &&
              i.page_url === prevUrl
          );
          if (item) {
            log(
              course,
              `Page ${Colors.value(canvasTopic.title)} is up-to-date in ${Colors.value('Topics')} module`
            );
          } else {
            await Canvas.v1.Courses.Modules.Items.create({
              path: { course_id: course.id, module_id: topicsModule.id },
              body: {
                'module_item[title]': canvasTopic.title,
                'module_item[type]': 'Page',
                'module_item[page_url]': canvasTopic.url
              }
            });
            log(
              course,
              `Added page ${Colors.value(canvasTopic.title)} to ${Colors.value('Topics')} module`
            );
          }
        } else if (topic.canvas?.id && !topic.canvas?.url) {
          const { url } = await Canvas.v1.Courses.Pages.show_page_courses({
            path: { course_id: course.id, url_or_id: topic.canvas.id }
          });
          topic.canvas.url = url;
        }

        let thumb: Imported.Annotation['canvas'] | undefined = undefined;
        if (topic.ThumbFilename && typeof topic.ThumbFilename === 'object') {
          topic.ThumbFilename = (await Snapshot.Files.uploadLocalFiles({
            course,
            entry: topic.ThumbFilename as JSONObject,
            folder: 'Topic Thumbnails',
            overrideName:
              (canvasTopic?.title ||
                (topic.canvas!.args['wiki_page[title]'] as string)) +
              path.extname(topic.ThumbFilename.filename)
          })) as unknown as Imported.Annotation;
          // @ts-expect-error 2339
          thumb = topic.ThumbFilename.canvas;
        }
        toc.push({
          thumb,
          caption: topic.Description || undefined,
          page: topic.canvas
        });
      }
    }

    if (toc.length) {
      const body: Partial<Canvas.v1.Courses.Pages.createFormParameters> = {
        'wiki_page[title]': 'Topics Table of Contents',
        'wiki_page[body]': await Templates.render(Templates.Canvas.TopicsTOC, {
          course_id: course.id,
          toc
        }),
        'wiki_page[published]': true
      };
      let tocPage: Canvas.Pages.Page | undefined = undefined;
      try {
        tocPage = await Canvas.v1.Courses.Pages.show_page_courses({
          path: { course_id: course.id, url_or_id: 'topics-table-of-contents' }
        });
      } catch (_) {
        // ignore error if not found
      }
      if (tocPage && Preferences.duplicates() === 'update') {
        if (section.SectionInfo?.canvas?.toc) {
          if (!Imported.isEqual(body, section.SectionInfo.canvas.toc.args)) {
            tocPage = await Canvas.v1.Courses.Pages.update({
              path: {
                course_id: course.id,
                url_or_id: section.SectionInfo.canvas.toc.id || tocPage.page_id
              },
              body
            });
            log(course, `Topics table of conents has been updated`);
          } else {
            log(course, 'Topics table of contents is up-to-date');
          }
        } else {
          tocPage = await Canvas.v1.Courses.Pages.update({
            path: { course_id: course.id, url_or_id: tocPage.page_id },
            body
          });
        }
      } else {
        tocPage = await Canvas.v1.Courses.Pages.create({
          path: { course_id: course.id },
          body
        });
        log(course, `Created topics table of contents`);
      }
      if (tocPage) {
        section.SectionInfo = {
          ...section.SectionInfo,
          // @ts-expect-error 2322
          canvas: {
            ...section.SectionInfo?.canvas,
            toc: {
              id: tocPage.page_id.toString(),
              args: body,
              created_at: tocPage.created_at,
              entries: toc
            }
          }
        };

        if (!topicsModule.items) {
          topicsModule = await Canvas.v1.Courses.Modules.show_module({
            path: { course_id: course.id, id: topicsModule.id },
            query: { include: ['items'] }
          });
        }
        const item = topicsModule.items?.find(
          (i) =>
            // @ts-expect-error 2339 it's there
            i.type === 'Page' && 'page_url' in i && i.page_url == toc.url
        );
        if (item || section.SectionInfo?.canvas?.toc?.id === tocPage.page_id) {
          log(
            course,
            `Table of contents is up-to-date in ${Colors.value('Topics')} module`
          );
        } else {
          await Canvas.v1.Courses.Modules.Items.create({
            path: { course_id: course.id, module_id: topicsModule.id },
            body: {
              'module_item[title]': 'Table of Contents',
              'module_item[type]': 'Page',
              'module_item[page_url]': tocPage.url,
              'module_item[position]': 1
            }
          });
          log(
            course,
            `Added table of contents to ${Colors.value('Topics')} module`
          );
        }
      }
    }
  }
}
