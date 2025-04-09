import { client } from '../../../../../Client.js';
import { File } from '../../../../../Resources/Files.js';

export type translate_file_referencePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  migration_id: string;
};

type Options = {
  pathParams: translate_file_referencePathParameters;
};

/**
 * Translate file reference
 *
 * Get information about a file from a course copy file reference
 *
 * Nickname: translate_file_reference
 */
export async function translate_file_reference({ pathParams }: Options) {
  return await client().fetchAs<File>(
    `/v1/courses/{course_id}/files/file_ref/{migration_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
