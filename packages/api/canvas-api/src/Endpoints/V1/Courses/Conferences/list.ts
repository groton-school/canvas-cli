import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Conference } from '../../../../Resources/Conferences.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List conferences
 *
 * Retrieve the paginated list of conferences for this context
 *
 * This API returns a JSON object containing the list of conferences, the key
 * for the list of conferences is "conferences"
 *
 * Nickname: list_conferences_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Conference[]>(
    `/api/v1/courses/{course_id}/conferences`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
