import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

export type getSearchParameters = {
  /**
   * If specified, only the users whose ids are given will be included in the
   * results. SIS ids can be used, prefixed by "sis_user_id:". It is an error
   * to specify an id for a user who is not a student in the context.
   *
   * Format: 'int64'
   */
  user_ids: string[];
  /**
   * If specified, only the outcomes whose ids are given will be included in
   * the results. it is an error to specify an id for an outcome which is not
   * linked to the context.
   *
   * Format: 'int64'
   */
  outcome_ids: string[];
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
   */
  include_hidden: boolean;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: getSearchParameters;
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
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/outcome_results`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
