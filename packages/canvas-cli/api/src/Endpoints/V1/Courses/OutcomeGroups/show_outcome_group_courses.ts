import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type show_outcome_group_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
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
