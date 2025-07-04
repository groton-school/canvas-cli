import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { CourseEpubExport } from '../../../Resources/EPubExports.js';

export type listSearchParameters = Masquerade & Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
export async function list(options: Options) {
  const response = await client().fetchAs<CourseEpubExport[]>(
    `/api/v1/epub_exports`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
