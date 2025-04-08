import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {
  /**
   * The full name of the user. This name will be used by teacher for grading.
   * Required if this is a self-registration.
   */
  'user[name]': string;
  /**
   * User's name as it will be displayed in discussions, messages, and
   * comments.
   */
  'user[short_name]': string;
  /** User's name as used to sort alphabetically in lists. */
  'user[sortable_name]': string;
  /**
   * The time zone for the user. Allowed time zones are
   * {http://www.iana.org/time-zones IANA time zones} or friendlier
   * {http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on
   * Rails time zones}.
   */
  'user[time_zone]': string;
  /**
   * The user's preferred language, from the list of languages Canvas
   * supports. This is in RFC-5646 format.
   */
  'user[locale]': string;
  /**
   * Whether the user accepts the terms of use. Required if this is a
   * self-registration and this canvas instance requires users to accept the
   * terms (on by default).
   *
   * If this is true, it will mark the user as having accepted the terms of
   * use.
   */
  'user[terms_of_use]': boolean;
  /**
   * Automatically mark the user as registered.
   *
   * If this is true, it is recommended to set
   * <tt>"pseudonym[send_confirmation]"</tt> to true as well. Otherwise, the
   * user will not receive any messages about their account creation.
   *
   * The users communication channel confirmation can be skipped by setting
   * <tt>"communication_channel[skip_confirmation]"</tt> to true as well.
   */
  'user[skip_registration]': boolean;
  /**
   * User's login ID. If this is a self-registration, it must be a valid email
   * address.
   */
  'pseudonym[unique_id]': string;
  /** User's password. Cannot be set during self-registration. */
  'pseudonym[password]': string;
  /**
   * SIS ID for the user's account. To set this parameter, the caller must be
   * able to manage SIS permissions.
   */
  'pseudonym[sis_user_id]': string;
  /**
   * Integration ID for the login. To set this parameter, the caller must be
   * able to manage SIS permissions. The Integration ID is a secondary
   * identifier useful for more complex SIS integrations.
   */
  'pseudonym[integration_id]': string;
  /**
   * Send user notification of account creation if true. Automatically set to
   * true during self-registration.
   */
  'pseudonym[send_confirmation]': boolean;
  /**
   * Send user a self-registration style email if true. Setting it means the
   * users will get a notification asking them to "complete the registration
   * process" by clicking it, setting a password, and letting them in. Will
   * only be executed on if the user does not need admin approval. Defaults to
   * false unless explicitly provided.
   */
  'pseudonym[force_self_registration]': boolean;
  /**
   * The authentication provider this login is associated with. Logins
   * associated with a specific provider can only be used with that provider.
   * Legacy providers (LDAP, CAS, SAML) will search for logins associated with
   * them, or unassociated logins. New providers will only search for logins
   * explicitly associated with them. This can be the integer ID of the
   * provider, or the type of the provider (in which case, it will find the
   * first matching provider).
   */
  'pseudonym[authentication_provider_id]': string;
  /** The communication channel type, e.g. 'email' or 'sms'. */
  'communication_channel[type]': string;
  /** The communication channel address, e.g. the user's email address. */
  'communication_channel[address]': string;
  /**
   * Only valid for account admins. If true, returns the new user account
   * confirmation URL in the response.
   */
  'communication_channel[confirmation_url]': boolean;
  /**
   * Only valid for site admins and account admins making requests; If true,
   * the channel is automatically validated and no confirmation email or SMS
   * is sent. Otherwise, the user must respond to a confirmation message to
   * confirm the channel.
   *
   * If this is true, it is recommended to set
   * <tt>"pseudonym[send_confirmation]"</tt> to true as well. Otherwise, the
   * user will not receive any messages about their account creation.
   */
  'communication_channel[skip_confirmation]': boolean;
  /**
   * If true, validations are performed on the newly created user (and their
   * associated pseudonym) even if the request is made by a privileged user
   * like an admin. When set to false, or not included in the request
   * parameters, any newly created users are subject to validations unless the
   * request is made by a user with a 'manage_user_logins' right. In which
   * case, certain validations such as 'require_acceptance_of_terms' and
   * 'require_presence_of_name' are not enforced. Use this parameter to return
   * helpful json errors while building users with an admin request.
   */
  force_validations: boolean;
  /**
   * When true, will first try to re-activate a deleted user with matching
   * sis_user_id if possible. This is commonly done with
   * user[skip_registration] and communication_channel[skip_confirmation] so
   * that the default communication_channel is also restored.
   */
  enable_sis_reactivation: boolean;
  /**
   * If you're setting the password for the newly created user, you can
   * provide this param with a valid URL pointing into this Canvas
   * installation, and the response will include a destination field that's a
   * URL that you can redirect a browser to and have the newly created user
   * automatically logged in. The URL is only valid for a short time, and must
   * match the domain this request is directed to, and be for a well-formed
   * path that Canvas can recognize.
   *
   * Format: url
   */
  destination: string;
  /**
   * `observer` if doing a self-registration with a pairing code. This allows
   * setting the password during user creation.
   */
  initial_enrollment_type: string;
  /**
   * If provided and valid, will link the new user as an observer to the
   * student's whose pairing code is given.
   */
  'pairing_code[code]': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a user
 *
 * Create and return a new user and pseudonym for an account.
 *
 * [DEPRECATED (for self-registration only)] If you don't have the "Modify login
 * details for users" permission, but self-registration is enabled on the
 * account, you can still use this endpoint to register new users. Certain
 * fields will be required, and others will be ignored (see below).
 *
 * Nickname: create_user
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<User>(`/v1/accounts/{account_id}/users`, {
    method: 'POST',
    params: parameters
  });
}
