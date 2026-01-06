import * as Imported from '@msar/types.import';
import { Canvas } from '@oauth2-cli/canvas';
import * as OneRoster from '../OneRoster.js';

export function toCanvasArgs(
  section: Imported.Data
): Partial<Canvas.v1.Accounts.Courses.createFormParameters> {
  return {
    'course[name]': OneRoster.name(section),
    'course[term_id]': `sis_term_id:${OneRoster.sis_term_id(section)}`,
    'course[sis_course_id]': OneRoster.sis_course_id(section),
    'course[public_description]': section.SectionInfo?.Description || '',
    enable_sis_reactivation: true
  };
}
