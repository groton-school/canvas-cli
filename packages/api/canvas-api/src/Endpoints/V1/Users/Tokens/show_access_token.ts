import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type show_access_tokenPathParameters = {
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

export type show_access_tokenSearchParameters = Masquerade;

type Options = {
  pathParams: show_access_tokenPathParameters;
} & (
  | {
      searchParams?: Partial<show_access_tokenSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_access_tokenSearchParameters;
      strict: true;
    }
);

/**
 * Show an access token
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Nickname: show_access_token
 */
export async function show_access_token(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/tokens/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
