import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  course_id: string;
};

export type listSearchParameters = Masquerade;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List assignments for user
 *
 * Returns the paginated list of assignments for the specified user if the
 * current user has rights to view. See {api:AssignmentsApiController#index List
 * assignments} for valid arguments.
 *
 * Nickname: list_assignments_for_user
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{user_id}/courses/{course_id}/assignments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
