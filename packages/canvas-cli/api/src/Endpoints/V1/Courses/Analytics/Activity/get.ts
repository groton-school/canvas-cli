import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get course-level participation data
 *
 * Returns page view hits and participation numbers grouped by day through the
 * entire history of the course. Page views is returned as a hash, where the
 * hash keys are dates in the format "YYYY-MM-DD". The page_views result set
 * includes page views broken out by access category. Participations is returned
 * as an array of dates in the format "YYYY-MM-DD".
 *
 * Nickname: get_course_level_participation_data
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/analytics/activity`,
    {
      method: 'GET',
      ...options
    }
  );
}
