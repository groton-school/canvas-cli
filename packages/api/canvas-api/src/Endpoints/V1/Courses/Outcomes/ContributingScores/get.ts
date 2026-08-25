import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  outcome_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * If specified, only the users whose ids are given will be included in the
results. It is an error to specify an id for a user who is not a student in
the context.
     *
     * 

format: 'int64'
     *
     * 
     */
    user_ids: number | string[];
    /**
     * If specified, only assignment alignments will be included in the results.
     *
     * type: boolean
     *
     *
     */
    only_assignment_alignments: boolean | string;
    /**
     * If true, unpublished assignments will be included in the results. Defaults to false.
     *
     * type: boolean
     *
     *
     */
    show_unpublished_assignments: boolean | string;
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
 * Get contributing scores
 *
 * Gets the contributing scores for a specific outcome and set of users.
Contributing scores are the individual assignment/quiz scores that
contributed to the outcome score for each user.

Returns all alignments for the outcome in the course context.
 *
 * nickname: get_contributing_scores
 *
 * 
 *
 * 
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/outcomes/{outcome_id}/contributing_scores`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
