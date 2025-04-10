import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
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
  /** Regenerate the actual token. */
  'token[regenerate]': boolean;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params?: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an access token
 *
 * Update an existing access token.
 *
 * The ID can be the actual database ID of the token, or the 'token_hint' value.
 *
 * Regenerating an expired token requires a new expiration date.
 *
 * Nickname: update_access_token
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/tokens/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
