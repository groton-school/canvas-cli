import { client } from '../../../../../Client.js';

type redirect_to_assignment_override_for_groupPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  assignment_id: string;
};

type Options = {
  pathParams: redirect_to_assignment_override_for_groupPathParameters;
};

/**
 * Redirect to the assignment override for a group
 *
 * Responds with a redirect to the override for the given group, if any (404
 * otherwise).
 *
 * Nickname: redirect_to_assignment_override_for_group
 */
export async function redirect_to_assignment_override_for_group({
  pathParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/assignments/{assignment_id}/override`,
    {
      method: 'GET',
      pathParams
    }
  );
}
