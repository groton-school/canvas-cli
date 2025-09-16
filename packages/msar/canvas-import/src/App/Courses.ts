import { Colors } from '@battis/qui-cli.colors';
import '@battis/qui-cli.env';
import { Canvas } from '@groton/canvas-api.client.qui-cli';
import { select } from '@inquirer/prompts';
import * as Imported from '@msar/types.import';
import open from 'open';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';

type Options = {
  course: Canvas.Courses.Course;
  section: Imported.Data;
};

export async function handleDuplicateCourse({ course, section }: Options) {
  const next: Record<
    Preferences.DuplicateHandling,
    () =>
      | Promise<Canvas.Courses.Course | undefined>
      | Canvas.Courses.Course
      | undefined
  > = {
    update: async (): Promise<Canvas.Courses.Course> => {
      if (!section.SectionInfo?.canvas) {
        throw new Error(
          `Missing Canvas import information, cannot update ${Colors.value(section.SectionInfo?.GroupName)}`
        );
      }
      const params = Snapshot.Section.toCanvasArgs(section);
      params['course[term_id]'] = `sis_term_id:${Preferences.WORKSPACE_TERM}`;
      delete params['course[sis_course_id]'];
      delete params.enable_sis_reactivation;
      await Canvas.v1.Courses.update({
        pathParams: { id: course.id.toString() },
        params: params as Partial<Canvas.v1.Courses.updateFormParameters>
      });
      // TODO `update_course` likely _does_ return a course and documentation is wrong
      return await Canvas.v1.Courses.get({
        pathParams: { id: course.id.toString() }
      });
    },
    reset: async () => {
      course = await Canvas.v1.Courses.ResetContent.reset_course({
        pathParams: { course_id: course.id.toString() }
      });
      if (section.SectionInfo) {
        section.SectionInfo.canvas = {
          id: course.id.toString(),
          instance_url: Canvas.client().instance_url,
          args: {},
          created_at: course.created_at
        };
      }
      return await next.update();
    },
    browse: async () => {
      open(
        new URL(
          `/courses/${course!.id}`,
          Canvas.client().instance_url
        ).toString()
      );
      const choice = (await select({
        message: `How would you like to proceed?`,
        choices: Object.keys(next).filter(
          (key) => key != 'open in browser to examine'
        )
      })) as keyof typeof next;
      Preferences.setDuplicates(choice);
      return await next[choice]();
    },
    skip: () => undefined
  };
  const choice = (Preferences.duplicates() ||
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
    }))) as keyof typeof next;
  // FIXME track duplicates choice per-section or document that first choice applies to all
  Preferences.setDuplicates(choice);
  return await next[choice]();
}
