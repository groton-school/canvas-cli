import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type getSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get all users in a group (lti)
 *
 * Get all Canvas users in a group. Tool providers may only access groups that
 * belong to the context the tool is installed in.
 *
 * Nickname: get_all_users_in_group_lti
 */
export async function get(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/lti/groups/{group_id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
