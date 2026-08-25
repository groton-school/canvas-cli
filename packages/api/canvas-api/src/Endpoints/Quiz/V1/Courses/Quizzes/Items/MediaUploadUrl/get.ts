import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getPathParameters = {
  /**
     * no description
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  course_id: number | string;
  /**
     * no description
     *
     * type: integer

format: 'int64'
     *
     * 
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get items media_upload_url
 *
 * Get a url for uploading media for use in hot-spot question types. See the hot-spot
question type in the {Appendix: Question Types} for more details about using this endpoint.
 *
 * nickname: get_items_media_upload_url
 *
 * 
 *
 * 
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
