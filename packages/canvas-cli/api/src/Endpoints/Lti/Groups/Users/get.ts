import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
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
 * Get all users in a group (lti)
 *
 * Get all Canvas users in a group. Tool providers may only access groups that
 * belong to the context the tool is installed in.
 *
 * Nickname: get_all_users_in_group_lti
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/lti/groups/{group_id}/users`, {
    method: 'GET',
    pathParams
  });
}
