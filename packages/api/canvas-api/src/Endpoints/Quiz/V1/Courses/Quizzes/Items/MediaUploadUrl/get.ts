import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  assignment_id: number | string;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
        strict: true;
      }
  );

/**
 * Get items media_upload_url
 *
 * Get a url for uploading media for use in hot-spot question types. See the
 * hot-spot question type in the {Appendix: Question Types} for more details
 * about using this endpoint.
 *
 * Nickname: get_items_media_upload_url
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/media_upload_url`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
