import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { OutcomeGroup } from '../../../../Resources/OutcomeGroups.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
};

export type getSearchParameters = Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get all outcome groups for context
 *
 * Nickname: get_all_outcome_groups_for_context_courses
 */
export async function get(options: Options) {
  return await client().fetchAs<OutcomeGroup[]>(
    `/api/v1/courses/{course_id}/outcome_groups`,
    {
      method: 'GET',
      ...options
    }
  );
}
