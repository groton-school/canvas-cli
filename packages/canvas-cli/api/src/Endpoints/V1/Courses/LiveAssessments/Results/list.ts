import { client } from '../../../../../Client.js';

type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assessment_id: string;
};

type listSearchParameters = {
  /**
   * If set, restrict results to those for this user
   *
   * Format: 'int64'
   */
  user_id: number;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List live assessment results
 *
 * Returns a paginated list of live assessment results
 *
 * Nickname: list_live_assessment_results
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
