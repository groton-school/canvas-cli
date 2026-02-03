import { confirm, select } from '@inquirer/prompts';
import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import open from 'open';
import * as Snapshot from '../Snapshot/index.js';
import * as Preferences from './Preferences.js';
import * as Workspace from './Workspace.js';

type Options = {
  course: Canvas.Courses.Course;
  section: Imported.Data;
};

const descriptions: Record<Preferences.DuplicateHandling, string> = {
  overwrite:
    'Overwrite the existing course data with the snapshot, potentially creating duplicate items',
  update:
    'Import snapshot data into the course referencing existing snapshot information where possible, avoiding creating duplicate items',
  reset:
    'Reset the course content, erasing all existing content, and replace it with the snapshot',
  skip: 'Skip processing the snaphot import for this course',
  browse:
    'Open the current course in a browser and then make a decision about what to do'
};

export async function handleDuplicateCourse({ course, section }: Options) {
  const next: Record<
    Preferences.DuplicateHandling,
    () =>
      | Promise<Canvas.Courses.Course | undefined>
      | Canvas.Courses.Course
      | undefined
  > = {
    overwrite: async () => {
      return course;
    },
    update: async () => {
      if (!section.SectionInfo?.canvas) {
        const choice = (await select({
          message: `Missing Canvas import information for ${Colors.value(section.SectionInfo?.GroupName)}`,
          choices: [
            { value: 'overwrite', description: descriptions.overwrite },
            { value: 'reset', description: descriptions.reset },
            { value: 'skip', description: descriptions.skip },
            { value: 'browse', description: descriptions.browse }
          ]
        })) as keyof typeof next;
        return await next[choice]();
      }
      const params = Snapshot.Section.toCanvasArgs(section);
      params['course[term_id]'] = (await Workspace.getTermId()).toString();
      delete params['course[sis_course_id]'];
      delete params.enable_sis_reactivation;
      await Canvas.v1.Courses.update({
        pathParams: { id: course.id.toString() },
        params: params as Partial<Canvas.v1.Courses.updateFormParameters>
      });
      log(course, 'Updating existing course');
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
      log(course, 'Resetting existing course');
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
      return await next[choice]();
    },
    skip: () => {
      log(course, 'Skipping');
      return undefined;
    }
  };
  const choice = (Preferences.duplicates() ||
    (await select({
      message: `A course named ${Colors.value(course.name)} with sis_course_id ${Colors.value(course.sis_course_id)} already exists in Canvas and has assignments and/or pages.`,
      choices: [
        { value: 'overwrite', description: descriptions.overwrite },
        { value: 'update', description: descriptions.update },
        { value: 'reset', description: descriptions.reset },
        { value: 'skip', description: descriptions.skip },
        { value: 'browse', description: descriptions.browse }
      ]
    }))) as keyof typeof next;

  if (choice !== 'browse' && !Preferences.duplicates()) {
    if (
      await confirm({
        message: `Would you like to also ${Colors.value(choice)} all similar courses that have assignments and/or pages?`,
        default: false
      })
    ) {
      Preferences.setDuplicates(choice as Preferences.DuplicateHandling);
    }
  }
  return await next[choice as Preferences.DuplicateHandling]();
}

let prevCourseId: Canvas.Courses.Course['id'] | undefined = undefined;

export function log(
  course: Canvas.Courses.Course,
  message: string,
  level: 'debug' | 'info' | 'warning' | 'error' | 'fatal' = 'info',
  ...meta: unknown[]
) {
  Log[level](
    `${prevCourseId !== course.id ? `${Colors.value(course.name)} / ${Colors.value(course.sis_course_id)}\n` : ''}    ${message}`,
    course,
    ...meta
  );
  prevCourseId = course.id;
}
