import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type redirect_to_assignment_override_for_groupPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
};

export type redirect_to_assignment_override_for_groupSearchParameters =
  Masquerade;

type Options = {
  pathParams: redirect_to_assignment_override_for_groupPathParameters;
} & (
  | {
      searchParams?: Partial<redirect_to_assignment_override_for_groupSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: redirect_to_assignment_override_for_groupSearchParameters;
      strict: true;
    }
);

/**
 * Redirect to the assignment override for a group
 *
 * Responds with a redirect to the override for the given group, if any (404
 * otherwise).
 *
 * Nickname: redirect_to_assignment_override_for_group
 */
export async function redirect_to_assignment_override_for_group(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/assignments/{assignment_id}/override`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
