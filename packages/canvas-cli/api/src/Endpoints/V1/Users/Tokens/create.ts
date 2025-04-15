import { client } from '../../../../Client.js';

export type createPathParameters = {
  /** ID */
  user_id: string;
};

export type createFormParameters = {
  /** The purpose of the token. */
  'token[purpose]': string;
  /**
   * The time at which the token will expire.
   *
   * Format: date-time
   */
  'token[expires_at]': string;
  /** The scopes to associate with the token. */
  'token[scopes]': string[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create an access token
 *
 * Create a new access token for the specified user. If the user is not the
 * current user, the token will be created as "pending", and must be activated
 * by the user before it can be used.
 *
 * Nickname: create_access_token
 */
export async function create(options: Options) {
  return await client().fetchAs<void>(`/api/v1/users/{user_id}/tokens`, {
    method: 'POST',
    ...options
  });
}
