import { client } from '../../../../Client.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createFormParameters = {
  /** The ID of the user to create the login for. */
  'user[id]': string;
  /** The unique ID for the new login. */
  'login[unique_id]': string;
  /** The new login's password. */
  'login[password]': string;
  /**
   * SIS ID for the login. To set this parameter, the caller must be able to
   * manage SIS permissions on the account.
   */
  'login[sis_user_id]': string;
  /**
   * Integration ID for the login. To set this parameter, the caller must be
   * able to manage SIS permissions on the account. The Integration ID is a
   * secondary identifier useful for more complex SIS integrations.
   */
  'login[integration_id]': string;
  /**
   * The authentication provider this login is associated with. Logins
   * associated with a specific provider can only be used with that provider.
   * Legacy providers (LDAP, CAS, SAML) will search for logins associated with
   * them, or unassociated logins. New providers will only search for logins
   * explicitly associated with them. This can be the integer ID of the
   * provider, or the type of the provider (in which case, it will find the
   * first matching provider).
   */
  'login[authentication_provider_id]': string;
  /**
   * The declared intention of the user type. This can be set, but does not
   * change any Canvas functionality with respect to their access. A user can
   * still be a teacher, admin, student, etc. in any particular context
   * without regard to this setting. This can be used for administrative
   * purposes for integrations to be able to more easily identify why the user
   * was created. Valid values are: administrative observer staff student
   * student_other teacher
   */
  'login[declared_user_type]': string;
  /**
   * A Canvas User ID to identify a user in a trusted account (alternative to
   * `id`, `existing_sis_user_id`, or `existing_integration_id`). This
   * parameter is not available in OSS Canvas.
   */
  'user[existing_user_id]': string;
  /**
   * An Integration ID to identify a user in a trusted account (alternative to
   * `id`, `existing_user_id`, or `existing_sis_user_id`). This parameter is
   * not available in OSS Canvas.
   */
  'user[existing_integration_id]': string;
  /**
   * An SIS User ID to identify a user in a trusted account (alternative to
   * `id`, `existing_integration_id`, or `existing_user_id`). This parameter
   * is not available in OSS Canvas.
   */
  'user[existing_sis_user_id]': string;
  /**
   * The domain of the account to search for the user. This field is required
   * when identifying a user in a trusted account. This parameter is not
   * available in OSS Canvas.
   */
  'user[trusted_account]': string;
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
 * Create a user login
 *
 * Create a new login for an existing user in the given account.
 *
 * Nickname: create_user_login
 */
export async function create(options: Options) {
  return await client().fetchAs<void>(`/api/v1/accounts/{account_id}/logins`, {
    method: 'POST',
    ...options
  });
}
