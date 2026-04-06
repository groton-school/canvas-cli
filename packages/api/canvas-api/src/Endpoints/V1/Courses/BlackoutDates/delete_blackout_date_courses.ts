import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type delete_blackout_date_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_blackout_date_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_blackout_date_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_blackout_date_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_blackout_date_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_blackout_date_coursesSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_blackout_date_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_blackout_date_coursesSearchParameters;
        strict: true;
      }
  );

/**
 * Delete Blackout Date
 *
 * Delete a blackout date for the given context.
 *
 * Nickname: delete_blackout_date_courses
 */
export async function delete_blackout_date_courses(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/courses/{course_id}/blackout_dates/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
