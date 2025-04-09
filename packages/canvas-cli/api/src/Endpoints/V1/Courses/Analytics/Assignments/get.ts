import { client } from '../../../../../Client.js';

type getPathParameters = {
  /** ID */
  course_id: string;
};

type getSearchParameters = {
  /**
   * If async is true, then the course_assignments call can happen asynch-
   * ronously and MAY return a response containing a progress_url key instead
   * of an assignments array. If it does, then it is the caller's
   * responsibility to poll the API again to see if the progress is complete.
   * If the data is ready (possibly even on the first async call) then it will
   * be passed back normally, as documented in the example response.
   */
  async: boolean;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get course-level assignment data
 *
 * Returns a list of assignments for the course sorted by due date. For each
 * assignment returns basic assignment information, the grade breakdown, and a
 * breakdown of on-time/late status of homework submissions.
 *
 * Nickname: get_course_level_assignment_data
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/analytics/assignments`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
