import { JSONValue } from '@battis/typescript-tricks';

export type Token = {
  /**
   * The internal database ID of the token.
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The time the token was created.
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The time the token will permanently expire, or null if it does not
   * permanently expire.
   */
  expires_at: string | null;
  /**
   * The current state of the token. One of 'active', 'pending', 'disabled', or
   * 'deleted'.
   */
  workflow_state: string;
  /**
   * Whether the token should be remembered across sessions. Only applicable for
   * OAuth tokens.
   *
   * Type: boolean
   */
  remember_access: boolean | string;
  /**
   * The scopes associated with the token. If empty, there are no scope
   * limitations.
   */
  scopes: string[];
  /**
   * If the token was created while masquerading, this is the ID of the real
   * user. Otherwise, null.
   */
  real_user_id: number | string | null;
  /** The actual access token. Only included when the token is first created. */
  token: string;
  /** A short, unique string that can be used to look up the token. */
  token_hint: string;
  /**
   * The ID of the user the token belongs to.
   *
   * Type: integer
   */
  user_id: number | string;
  /** The purpose of the token. */
  purpose: string;
  /**
   * If the token was created by an OAuth application, this is the name of that
   * application. Otherwise, null.
   */
  app_name: string | null;
  /**
   * Whether the current user can manually regenerate this token.
   *
   * Type: boolean
   */
  can_manually_regenerate: boolean | string;
};
