import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getPathParameters = {
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
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /** Associations to include with the group. */
    include: string[];
  }>;

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
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single submission
 *
 * Get a single submission, based on user id.
 *
 * Nickname: get_single_submission_courses
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
