import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

export type listSearchParameters = {
  /** - "avatar_url": Optionally include avatar_url. */
  include: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

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
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{user_id}/observees`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
