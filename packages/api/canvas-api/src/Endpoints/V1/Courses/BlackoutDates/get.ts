import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single blackout date
 *
 * Returns the blackout date with the given id.
 *
 * nickname: get_single_blackout_date_courses
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/courses/{course_id}/blackout_dates/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
