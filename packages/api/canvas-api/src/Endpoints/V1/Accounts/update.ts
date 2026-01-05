import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Updates the account name */
  'account[name]': string;
  /**
   * Updates the account sis_account_id Must have manage_sis permission and
   * must not be a root_account.
   */
  'account[sis_account_id]': string;
  /**
   * The default time zone of the account. Allowed time zones are
   * {http://www.iana.org/time-zones IANA time zones} or friendlier
   * {http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on
   * Rails time zones}.
   */
  'account[default_time_zone]': string;
  /**
   * The default course storage quota to be used, if not otherwise specified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[default_storage_quota_mb]': number | string;
  /**
   * The default user storage quota to be used, if not otherwise specified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[default_user_storage_quota_mb]': number | string;
  /**
   * The default group storage quota to be used, if not otherwise specified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[default_group_storage_quota_mb]': number | string;
  /**
   * The ID of a course to be used as a template for all newly created
   * courses. Empty means to inherit the setting from parent account, 0 means
   * to not use a template even if a parent account has one set. The course
   * must be marked as a template.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[course_template_id]': number | string;
  /**
   * The ID of a parent account to move the account to. The new parent account
   * must be in the same root account as the original. The hierarchy of
   * sub-accounts will be preserved in the new parent account. The caller must
   * be an administrator in both the original parent account and the new
   * parent account.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'account[parent_account_id]': number | string;
  /**
   * Restrict students from viewing courses after end date
   *
   * Type: boolean
   */
  'account[settings][restrict_student_past_view][value]': boolean | string;
  /**
   * Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[settings][restrict_student_past_view][locked]': boolean | string;
  /**
   * Restrict students from viewing courses before start date
   *
   * Type: boolean
   */
  'account[settings][restrict_student_future_view][value]': boolean | string;
  /**
   * Determines whether this account has Microsoft Teams Sync enabled or not.
   *
   * Note that if you are altering Microsoft Teams sync settings you must
   * enable the Microsoft Group enrollment syncing feature flag. In addition,
   * if you are enabling Microsoft Teams sync, you must also specify a tenant,
   * login attribute, and a remote attribute. Specifying a suffix to use is
   * optional.
   *
   * Type: boolean
   */
  'account[settings][microsoft_sync_enabled]': boolean | string;
  /**
   * The tenant this account should use when using Microsoft Teams Sync. This
   * should be an Azure Active Directory domain name.
   */
  'account[settings][microsoft_sync_tenant]': string;
  /**
   * The attribute this account should use to lookup users when using
   * Microsoft Teams Sync. Must be one of "sub", "email", "oid",
   * "preferred_username", or "integration_id".
   */
  'account[settings][microsoft_sync_login_attribute]': string;
  /**
   * A suffix that will be appended to the result of the login attribute when
   * associating Canvas users with Microsoft users. Must be under 255
   * characters and contain no whitespace. This field is optional.
   */
  'account[settings][microsoft_sync_login_attribute_suffix]': string;
  /**
   * The Active Directory attribute to use when associating Canvas users with
   * Microsoft users. Must be one of "mail", "mailNickname", or
   * "userPrincipalName".
   */
  'account[settings][microsoft_sync_remote_attribute]': string;
  /**
   * Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[settings][restrict_student_future_view][locked]': boolean | string;
  /**
   * Disable comments on announcements
   *
   * Type: boolean
   */
  'account[settings][lock_all_announcements][value]': boolean | string;
  /**
   * Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[settings][lock_all_announcements][locked]': boolean | string;
  /**
   * Copyright and license information must be provided for files before they
   * are published.
   *
   * Type: boolean
   */
  'account[settings][usage_rights_required][value]': boolean | string;
  /**
   * Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[settings][usage_rights_required][locked]': boolean | string;
  /**
   * Restrict students from viewing future enrollments in course list
   *
   * Type: boolean
   */
  'account[settings][restrict_student_future_listing][value]': boolean | string;
  /**
   * Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[settings][restrict_student_future_listing][locked]':
    | boolean
    | string;
  /**
   * Enable or disable individual learning paths for students based on
   * assessment
   *
   * Type: boolean
   */
  'account[settings][conditional_release][value]': boolean | string;
  /**
   * Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[settings][conditional_release][locked]': boolean | string;
  /**
   * Enable or disable course pacing
   *
   * Type: boolean
   */
  'account[settings][enable_course_paces][value]': boolean | string;
  /**
   * Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[settings][enable_course_paces][locked]': boolean | string;
  /**
   * Hash of optional password policy configuration parameters for a root
   * account
   *
   * +allow_login_suspension+ boolean:: Allow suspension of user logins upon
   * reaching maximum_login_attempts
   *
   * +require_number_characters+ boolean:: Require the use of number
   * characters when setting up a new password
   *
   * +require_symbol_characters+ boolean:: Require the use of symbol
   * characters when setting up a new password
   *
   * +minimum_character_length+ integer:: Minimum number of characters
   * required for a new password
   *
   * +maximum_login_attempts+ integer:: Maximum number of login attempts
   * before a user is locked out
   *
   * _Required_ feature option: Enhance password options
   *
   * Hash
   */
  'account[settings][password_policy]': JSONObject;
  /**
   * Enable or disable Canvas for Elementary for this account
   *
   * Type: boolean
   */
  'account[settings][enable_as_k5_account][value]': boolean | string;
  /**
   * Whether or not the classic font is used on the dashboard. Only applies if
   * enable_as_k5_account is true.
   *
   * Type: boolean
   */
  'account[settings][use_classic_font_in_k5][value]': boolean | string;
  /**
   * Enable or disable Canvas Career for this account
   *
   * Type: boolean
   */
  'account[settings][horizon_account][value]': boolean | string;
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   *
   * Type: boolean
   */
  override_sis_stickiness: boolean | string;
  /**
   * [DEPRECATED] Restrict instructors from changing mastery scale
   *
   * Type: boolean
   */
  'account[settings][lock_outcome_proficiency][value]': boolean | string;
  /**
   * [DEPRECATED] Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[lock_outcome_proficiency][locked]': boolean | string;
  /**
   * [DEPRECATED] Restrict instructors from changing proficiency calculation
   * method
   *
   * Type: boolean
   */
  'account[settings][lock_proficiency_calculation][value]': boolean | string;
  /**
   * [DEPRECATED] Lock this setting for sub-accounts and courses
   *
   * Type: boolean
   */
  'account[lock_proficiency_calculation][locked]': boolean | string;
  /**
   * Give this a set of keys and boolean values to enable or disable services
   * matching the keys
   *
   * Hash
   */
  'account[services]': JSONObject;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update an account
 *
 * Update an existing account.
 *
 * Nickname: update_account
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Account>(`/api/v1/accounts/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
