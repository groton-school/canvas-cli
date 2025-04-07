import { File } from '../../../../../Resources/Files.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Translate file reference
 *
 * Get information about a file from a course copy file reference
 *
 * Nickname: translate_file_reference
 */
export async function translate_file_reference({
  parameters
}: Options): Promise<File> {
  return await (
    await fetch(`/v1/courses/{course_id}/files/file_ref/{migration_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
