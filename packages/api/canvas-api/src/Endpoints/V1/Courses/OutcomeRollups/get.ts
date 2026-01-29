import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * If specified, instead of returning one rollup for each user, all the user
     * rollups will be combined into one rollup for the course that will contain
     * the average (or median, see below) rollup score for each outcome.
     */
    aggregate: string;
    /**
     * If aggregate rollups requested, then this value determines what statistic
     * is used for the aggregate. Defaults to "mean" if this value is not
     * specified.
     */
    aggregate_stat: string;
    /**
     * If specified, only the users whose ids are given will be included in the
     * results or used in an aggregate result. it is an error to specify an id
     * for a user who is not a student in the context
     *
     * Format: 'int64'
     */
    user_ids: number | string[];
    /**
     * If specified, only the outcomes whose ids are given will be included in
     * the results. it is an error to specify an id for an outcome which is not
     * linked to the context.
     *
     * Format: 'int64'
     */
    outcome_ids: number | string[];
    /**
     * [String,
     * "courses"|"outcomes"|"outcomes.alignments"|"outcome_groups"|"outcome_links"|"outcome_paths"|"users"]
     * Specify additional collections to be side loaded with the result.
     */
    include: string[];
    /**
     * Specify additional values to exclude. "missing_user_rollups" excludes
     * rollups for users without results. "missing_outcome_results" excludes
     * outcomes without results.
     */
    exclude: string[];
    /**
     * If specified, sorts outcome result rollups. "student" sorting will sort
     * by a user's sortable name. "outcome" sorting will sort by the given
     * outcome's rollup score. The latter requires specifying the
     * "sort_outcome_id" parameter. By default, the sort order is ascending.
     */
    sort_by: string;
    /**
     * If outcome sorting requested, then this determines which outcome to use
     * for rollup score sorting.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    sort_outcome_id: number | string;
    /**
     * If sorting requested, then this allows changing the default sort order of
     * ascending to descending.
     */
    sort_order: string;
    /**
     * If defaults are requested, then color and mastery level defaults will be
     * added to outcome ratings in the rollup. This will only take effect if the
     * Account Level Mastery Scales FF is DISABLED
     *
     * Type: boolean
     */
    add_defaults: boolean | string;
    /**
     * **DEPRECATED**: This parameter is deprecated. Use the separate GET
     * /api/v1/courses/:course_id/outcomes/:outcome_id/contributing_scores
     * endpoint instead to fetch contributing scores for a specific outcome. If
     * contributing scores are requested, then each individual outcome score
     * will also include all graded artifacts that contributed to the outcome
     * score
     *
     * Type: boolean
     */
    contributing_scores: boolean | string;
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
 * Get outcome result rollups
 *
 * Gets the outcome rollups for the users and outcomes in the specified context.
 *
 * Nickname: get_outcome_result_rollups
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/outcome_rollups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
