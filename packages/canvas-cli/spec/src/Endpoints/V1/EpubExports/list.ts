import { CourseEpubExport } from '../../../Resources/EPubExports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List courses with their latest ePub export
 *
 * A paginated list of all courses a user is actively participating in, and the
 * latest ePub export associated with the user & course.
 *
 * Nickname: list_courses_with_their_latest_epub_export
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/epub_exports`, { method: 'GET', body: parameters })
  ).json();
}
