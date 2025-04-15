import { client } from '../../../../Client.js';

export type show_access_tokenPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_access_tokenPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(`/api/v1/users/{user_id}/tokens/{id}`, {
    method: 'GET',
    ...options
  });
}
