import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

export type listSearchParameters = Partial<{
  /** - "avatar_url": Optionally include avatar_url. */
  include: string[];
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
 * List observees
 *
 * A paginated list of the users that the given user is observing.
 *
 * Note:* all users are allowed to list their own observees. Administrators can
 * list other users' observees.
 *
 * The returned observees will include an attribute
 * "observation_link_root_account_ids", a list of ids for the root accounts the
 * observer and observee are linked on. The observer will only be able to
 * observe in courses associated with these root accounts.
 *
 * Nickname: list_observees
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/users/{user_id}/observees`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
