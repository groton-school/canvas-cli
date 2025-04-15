import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
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
 * List assignment overrides
 *
 * Returns the paginated list of overrides for this assignment that target
 * sections/groups/students visible to the current user.
 *
 * Nickname: list_assignment_overrides
 */
export async function list(options: Options) {
  return await client().fetchAs<AssignmentOverride[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/overrides`,
    {
      method: 'GET',
      ...options
    }
  );
}
