import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

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
  outcome_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * If specified, only the users whose ids are given will be included in the
     * results. It is an error to specify an id for a user who is not a student
     * in the context.
     *
     * Format: 'int64'
     */
    user_ids: number | string[];
    /**
     * If specified, only assignment alignments will be included in the results.
     *
     * Type: boolean
     */
    only_assignment_alignments: boolean | string;
    /**
     * If true, unpublished assignments will be included in the results.
     * Defaults to false.
     *
     * Type: boolean
     */
    show_unpublished_assignments: boolean | string;
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get contributing scores
 *
 * Gets the contributing scores for a specific outcome and set of users.
 * Contributing scores are the individual assignment/quiz scores that
 * contributed to the outcome score for each user.
 *
 * Returns all alignments for the outcome in the course context.
 *
 * Nickname: get_contributing_scores
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
