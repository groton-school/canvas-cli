import { File } from '../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List files
 *
 * Returns the paginated list of files for the folder or course.
 *
 * Nickname: list_files_courses
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/files`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
