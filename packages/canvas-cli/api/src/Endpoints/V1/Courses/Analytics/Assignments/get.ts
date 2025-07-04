import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

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
     * If async is true, then the course_assignments call can happen asynch-
     * ronously and MAY return a response containing a progress_url key instead
     * of an assignments array. If it does, then it is the caller's
     * responsibility to poll the API again to see if the progress is complete.
     * If the data is ready (possibly even on the first async call) then it will
     * be passed back normally, as documented in the example response.
     *
     * Type: boolean
     */
    async: boolean | string;
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
 * Get course-level assignment data
 *
 * Returns a list of assignments for the course sorted by due date. For each
 * assignment returns basic assignment information, the grade breakdown, and a
 * breakdown of on-time/late status of homework submissions.
 *
 * Nickname: get_course_level_assignment_data
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/analytics/assignments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
