import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type getSearchParameters = Masquerade;

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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: getSearchParameters;
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/analytics/activity`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
