import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../Client.js';
import { CourseEpubExport } from '../../../Resources/EPubExports.js';

export type listSearchParameters = Paginated;

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * List courses with their latest ePub export
 *
 * A paginated list of all courses a user is actively participating in, and the
 * latest ePub export associated with the user & course.
 *
 * Nickname: list_courses_with_their_latest_epub_export
 */
export async function list({}: Options) {
  return await client().fetchAs<CourseEpubExport[]>(`/v1/epub_exports`, {
    method: 'GET'
  });
}
