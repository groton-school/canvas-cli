import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: listSearchParameters;
        strict: true;
      }
  );

/**
 * List blackout dates
 *
 * Returns the list of blackout dates for the current context.
 *
 * Nickname: list_blackout_dates_courses
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
