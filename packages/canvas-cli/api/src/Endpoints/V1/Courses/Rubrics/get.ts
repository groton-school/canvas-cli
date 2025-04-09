import { client } from '../../../../Client.js';
import { Rubric } from '../../../../Resources/Rubrics.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /** Related records to include in the response. */
  include: string[];
  /**
   * Applicable only if assessments are being returned. If included, returns
   * either all criteria data associated with the assessment, or just the
   * comments. If not included, both data and comments are omitted.
   */
  style: string;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get a single rubric
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_single_rubric_courses
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<Rubric>(
    `/v1/courses/{course_id}/rubrics/{id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
