import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Day } from '../../../../../Resources/GradebookHistory.js';

export type days_in_gradebook_history_for_this_coursePathParameters = {
  /**
   * The id of the contextual course for this API call
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type days_in_gradebook_history_for_this_courseSearchParameters =
  Masquerade & Paginated;

type Options = (
  | {
      path: days_in_gradebook_history_for_this_coursePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: days_in_gradebook_history_for_this_coursePathParameters;
    }
) &
  (
    | {
        query?: Partial<days_in_gradebook_history_for_this_courseSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<days_in_gradebook_history_for_this_courseSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: days_in_gradebook_history_for_this_courseSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: days_in_gradebook_history_for_this_courseSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Days in gradebook history for this course
 *
 * Returns a map of dates to grader/assignment groups
 *
 * Nickname: days_in_gradebook_history_for_this_course
 */
export async function days_in_gradebook_history_for_this_course(
  options: Options
) {
  const response = await client().fetchAs<Day[]>(
    `/api/v1/courses/{course_id}/gradebook_history/days`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
