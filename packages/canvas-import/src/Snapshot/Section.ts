import * as Canvas from '@groton/canvas-types';
import type { Item } from '@msar/snapshot-multiple/dist/SnapshotMultiple.d.ts';
import * as OneRoster from '../OneRoster.js';

export function toCanvasArgs(section: Item): Canvas.Courses.Parameters {
  return {
    'course[name]': OneRoster.name(section),
    'course[term_id]': `sis_term_id:${OneRoster.sis_term_id(section)}`,
    'course[sis_course_id]': OneRoster.sis_course_id(section),
    'course[public_description]': section.SectionInfo?.Description,
    enable_sis_reactivation: true
  };
}
