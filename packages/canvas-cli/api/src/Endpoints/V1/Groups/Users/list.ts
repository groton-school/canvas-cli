import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
};

export type listSearchParameters = Partial<{
  /**
   * The partial name or full ID of the users to match and return in the
   * results list. Must be at least 3 characters.
   */
  search_term: string;
  /** "avatar_url": Include users' avatar_urls. */
  include: string[];
  /**
   * Whether to filter out inactive users from the results. Defaults to false
   * unless explicitly provided.
   */
  exclude_inactive: boolean;
}> &
  Paginated;

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
 * List group's users
 *
 * Returns a paginated list of users in the group.
 *
 * Nickname: list_group_s_users
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/groups/{group_id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
