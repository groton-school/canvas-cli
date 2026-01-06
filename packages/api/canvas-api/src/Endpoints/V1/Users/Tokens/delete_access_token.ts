import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type delete_access_tokenPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_access_tokenSearchParameters = Masquerade;

type Options = {
  pathParams: delete_access_tokenPathParameters;
} & (
  | {
      searchParams?: Partial<delete_access_tokenSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_access_tokenSearchParameters;
      strict: true;
    }
);

/**
 * Delete an access token
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Nickname: delete_access_token
 */
export async function delete_access_token(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/tokens/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
