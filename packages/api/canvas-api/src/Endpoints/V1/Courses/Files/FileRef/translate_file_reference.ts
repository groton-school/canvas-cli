import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { File } from '../../../../../Resources/Files.js';

export type translate_file_referencePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  migration_id: string | number;
};

export type translate_file_referenceSearchParameters = Masquerade;

type Options = (
  | {
      path: translate_file_referencePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: translate_file_referencePathParameters;
    }
) &
  (
    | {
        query?: Partial<translate_file_referenceSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<translate_file_referenceSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<translate_file_referenceSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: translate_file_referenceSearchParameters;
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
