import { client } from '../../../../Client.js';

export type delete_access_tokenPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_access_tokenPathParameters;
};

/**
 * Delete an access token
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Nickname: delete_access_token
 */
export async function delete_access_token({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/tokens/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
