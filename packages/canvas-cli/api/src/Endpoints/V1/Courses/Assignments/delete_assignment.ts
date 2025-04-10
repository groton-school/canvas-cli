import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

export type delete_assignmentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_assignmentPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete an assignment
 *
 * Delete the given assignment.
 *
 * Nickname: delete_assignment
 */
export async function delete_assignment({ pathParams }: Options) {
  return await client().fetchAs<Assignment>(
    `/v1/courses/{course_id}/assignments/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
