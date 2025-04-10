import { client } from '../../../../../Client.js';
import { Admin } from '../../../../../Resources/Admins.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List my admin roles
 *
 * A paginated list of the current user's roles in the account. The results are
 * the same as those returned by the {api:AdminsController#index List account
 * admins} endpoint with +user_id+ set to +self+, except the "Admins - Add /
 * Remove" permission is not required.
 *
 * Nickname: list_my_admin_roles
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/admins/self`,
    {
      method: 'GET',
      pathParams
    }
  );
}
