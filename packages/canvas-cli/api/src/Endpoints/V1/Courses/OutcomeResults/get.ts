import { Masquerade } from '@groton/canvas-cli.client.base';
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
     * If specified, only the users whose ids are given will be included in the
     * results. SIS ids can be used, prefixed by "sis_user_id:". It is an error
     * to specify an id for a user who is not a student in the context.
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
     * "alignments"|"outcomes"|"outcomes.alignments"|"outcome_groups"|"outcome_links"|"outcome_paths"|"users"]
     * Specify additional collections to be side loaded with the result.
     * "alignments" includes only the alignments referenced by the returned
     * results. "outcomes.alignments" includes all alignments referenced by
     * outcomes in the context.
     */
    include: string[];
    /**
     * If true, results that are hidden from the learning mastery gradebook and
     * student rollup scores will be included
     *
     * Type: boolean
     */
    include_hidden: boolean | string;
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
 * Get outcome results
 *
 * Gets the outcome results for users and outcomes in the specified context.
 *
 * Used in sLMGB
 *
 * Nickname: get_outcome_results
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/outcome_results`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
