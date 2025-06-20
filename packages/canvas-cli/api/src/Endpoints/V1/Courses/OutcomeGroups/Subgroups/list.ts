import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { OutcomeGroup } from '../../../../../Resources/OutcomeGroups.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List subgroups
 *
 * A paginated list of the immediate OutcomeGroup children of the outcome group.
 *
 * Nickname: list_subgroups_courses
 */
export async function list(options: Options) {
  const response = await client().fetchAs<OutcomeGroup[]>(
    `/api/v1/courses/{course_id}/outcome_groups/{id}/subgroups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
