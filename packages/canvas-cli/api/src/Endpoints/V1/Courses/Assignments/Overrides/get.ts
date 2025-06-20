import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  id: string;
};

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
 * Get a single assignment override
 *
 * Returns details of the the override with the given id.
 *
 * Nickname: get_single_assignment_override
 */
export async function get(options: Options) {
  const response = await client().fetchAs<AssignmentOverride>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
