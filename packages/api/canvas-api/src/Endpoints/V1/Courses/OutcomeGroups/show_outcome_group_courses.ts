import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type show_outcome_group_coursesPathParameters = {
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

export type show_outcome_group_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: show_outcome_group_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_outcome_group_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_outcome_group_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_outcome_group_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_outcome_group_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_outcome_group_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Show an outcome group
 *
 * Returns detailed information about a specific outcome group.
 *
 * Nickname: show_outcome_group_courses
 */
export async function show_outcome_group_courses(options: Options) {
  const response = await client().fetchAs<OutcomeGroup>(
    `/api/v1/courses/{course_id}/outcome_groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
