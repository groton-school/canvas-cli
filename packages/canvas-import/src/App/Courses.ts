import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import * as Canvas from '@groton/canvas-types';
import { select } from '@inquirer/prompts';
import * as Imported from '@msar/types.import';
import open from 'open';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

type Options = {
  course: Canvas.Courses.Model;
  section: Imported.Data;
};

export async function handleDuplicateCourse({ course, section }: Options) {
  const next: Record<
    Preferences.DuplicateHandling,
    () =>
      | Promise<Canvas.Courses.Model | undefined>
      | Canvas.Courses.Model
      | undefined
  > = {
    update: async () => {
      if (!section.SectionInfo?.canvas) {
        throw new Error(
          `Missing Canvas import information, cannot update ${Colors.value(section.SectionInfo?.GroupName)}`
        );
      }
      const args = Snapshot.Section.toCanvasArgs(section);
      args['course[term_id]'] = `sis_term_id:${Preferences.WORKSPACE_TERM}`;
      delete args['course[sis_course_id]'];
      delete args.enable_sis_reactivation;
      return await Canvas.Courses.update({ course, args });
    },
    reset: async () => {
      course = await Canvas.Courses.reset(course!);
      if (section.SectionInfo) {
        section.SectionInfo.canvas = {
          id: course.id,
          args: {},
          created_at: course.created_at
        };
      }
      return await next.update();
    },
    browse: async () => {
      open(Canvas.url(`/courses/${course!.id}`).toString());
      return await next[
        (await select({
          message: `How would you like to proceed?`,
          choices: Object.keys(next).filter(
            (key) => key != 'open in browser to examine'
          )
        })) as keyof typeof next
      ]();
    },
    skip: () => undefined
  };
  return await next[
    (Preferences.duplicates() ||
      (await select({
        message: `A course named ${Colors.value(course.name)} with sis_course_id ${Colors.value(course.sis_course_id)} already exists in Canvas.`,
        choices: [
          {
            value: 'update',
            description:
              'Import snapshot data into the course, potentially creating duplicate content if previous Canvas import data was not exported to the index JSON file'
          },
          {
            value: 'reset',
            description:
              'Reset the course content, erasing all existing content, and replace it with the snapshot'
          },
          {
            value: 'browse',
            description:
              'Open the current course in a browser and then make a decision about what to do'
          },
          {
            value: 'skip',
            description: 'Skip processing the snaphot import for this course'
          }
        ]
      }))) as keyof typeof next
  ]();
}
