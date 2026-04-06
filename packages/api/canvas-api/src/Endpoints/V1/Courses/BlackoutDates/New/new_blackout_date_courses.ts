import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

export type new_blackout_date_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type new_blackout_date_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: new_blackout_date_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: new_blackout_date_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<new_blackout_date_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<new_blackout_date_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: new_blackout_date_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: new_blackout_date_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * New Blackout Date
 *
 * Initialize an unsaved Blackout Date for the given context.
 *
 * Nickname: new_blackout_date_courses
 */
export async function new_blackout_date_courses(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/courses/{course_id}/blackout_dates/new`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
