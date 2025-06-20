import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type remove_observeePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  observee_id: string;
};

export type remove_observeeSearchParameters = Partial<{
  /**
   * If specified, only removes the link for the given root account
   *
   * Format: 'int64'
   */
  root_account_id: number;
}>;

type Options = {
  pathParams: remove_observeePathParameters;
} & (
  | {
      searchParams?: Partial<remove_observeeSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_observeeSearchParameters;
      strict: true;
    }
);

/**
 * Remove an observee
 *
 * Unregisters a user as being observed by the given user.
 *
 * Nickname: remove_observee
 */
export async function remove_observee(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/users/{user_id}/observees/{observee_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
