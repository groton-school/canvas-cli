import * as Canvas from '@groton/canvas-cli.api';
import * as Imported from '@msar/types.import';
import * as OneRoster from '../OneRoster.js';

export function toCanvasArgs(
  section: Imported.Data
): Partial<Canvas.V1.Accounts.Courses.createFormParameters> {
  return {
    'course[name]': OneRoster.name(section),
    'course[term_id]': `sis_term_id:${OneRoster.sis_term_id(section)}`,
    'course[sis_course_id]': OneRoster.sis_course_id(section),
    'course[public_description]': section.SectionInfo?.Description || '',
    enable_sis_reactivation: true
  };
}
