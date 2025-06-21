import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** - "avatar_url": Optionally include avatar_url. */
    include: string[];
  }>;

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
 * List observers
 *
 * A paginated list of the observers of a given user.
 *
 * Note:* all users are allowed to list their own observers. Administrators can
 * list other users' observers.
 *
 * The returned observers will include an attribute
 * "observation_link_root_account_ids", a list of ids for the root accounts the
 * observer and observee are linked on. The observer will only be able to
 * observe in courses associated with these root accounts.
 *
 * Nickname: list_observers
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/users/{user_id}/observers`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
