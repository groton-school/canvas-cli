import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The new unique ID for the login. */
  'login[unique_id]': string;
  /**
   * The new password for the login. Admins can only set a password for
   * another user if the "Password setting by admins" account setting is
   * enabled.
   */
  'login[password]': string;
  /**
   * The prior password for the login. Required if the caller is changing
   * their own password.
   */
  'login[old_password]': string;
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
  /** Used to suspend or re-activate a login. */
  'login[workflow_state]': string;
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
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Edit a user login
 *
 * Update an existing login for a user in the given account.
 *
 * Nickname: edit_user_login
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/logins/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
