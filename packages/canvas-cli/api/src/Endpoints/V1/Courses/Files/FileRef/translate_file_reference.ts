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
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Translate file reference
 *
 * Get information about a file from a course copy file reference
 *
 * Nickname: translate_file_reference
 */
export async function translate_file_reference(options: Options) {
  const response = await client().fetchAs<File>(
    `/api/v1/courses/{course_id}/files/file_ref/{migration_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
