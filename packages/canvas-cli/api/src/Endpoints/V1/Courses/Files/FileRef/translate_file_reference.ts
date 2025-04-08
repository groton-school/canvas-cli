import { client } from '../../../../../Client.js';
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
export async function translate_file_reference({ parameters }: Options) {
  return await client().fetchAs<File>(
    `/v1/courses/{course_id}/files/file_ref/{migration_id}`,
    { method: 'GET', params: parameters }
  );
}
