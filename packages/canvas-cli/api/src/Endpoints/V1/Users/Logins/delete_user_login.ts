import { client } from '../../../../Client.js';

export type delete_user_loginPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_user_loginPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
