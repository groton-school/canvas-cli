import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List blackout dates
 *
 * Returns the list of blackout dates for the current context.
 *
 * nickname: list_blackout_dates_courses
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<BlackoutDate[]>(
    `/api/v1/courses/{course_id}/blackout_dates`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
