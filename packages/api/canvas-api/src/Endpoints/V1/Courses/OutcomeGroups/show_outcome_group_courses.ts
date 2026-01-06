import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
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

type Options = {
  pathParams: show_outcome_group_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<show_outcome_group_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_outcome_group_coursesSearchParameters;
      strict: true;
    }
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
