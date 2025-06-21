import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type delete_user_loginPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type delete_user_loginSearchParameters = Masquerade;

type Options = {
  pathParams: delete_user_loginPathParameters;
} & (
  | {
      searchParams?: Partial<delete_user_loginSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_user_loginSearchParameters;
      strict: true;
    }
);

/**
 * Delete a user login
 *
 * Delete an existing login.
 *
 * Nickname: delete_user_login
 */
export async function delete_user_login(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{user_id}/logins/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
