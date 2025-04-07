import { JSONValue, JSONValue } from '@battis/typescript-tricks';
import { Account } from '../../../Resources/Accounts.js';

type Parameters = {
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
   * Format: int64
   */
  'account[default_storage_quota_mb]': number;
  /**
   * The default user storage quota to be used, if not otherwise specified.
   *
   * Format: int64
   */
  'account[default_user_storage_quota_mb]': number;
  /**
   * The default group storage quota to be used, if not otherwise specified.
   *
   * Format: int64
   */
  'account[default_group_storage_quota_mb]': number;
  /**
   * The ID of a course to be used as a template for all newly created
   * courses. Empty means to inherit the setting from parent account, 0 means
   * to not use a template even if a parent account has one set. The course
   * must be marked as a template.
   *
   * Format: int64
   */
  'account[course_template_id]': number;
  /**
   * The ID of a parent account to move the account to. The new parent account
   * must be in the same root account as the original. The hierarchy of
   * sub-accounts will be preserved in the new parent account. The caller must
   * be an administrator in both the original parent account and the new
   * parent account.
   *
   * Format: int64
   */
  'account[parent_account_id]': number;
  /** Restrict students from viewing courses after end date */
  'account[settings][restrict_student_past_view][value]': boolean;
  /** Lock this setting for sub-accounts and courses */
  'account[settings][restrict_student_past_view][locked]': boolean;
  /** Restrict students from viewing courses before start date */
  'account[settings][restrict_student_future_view][value]': boolean;
  /**
   * Determines whether this account has Microsoft Teams Sync enabled or not.
   *
   * Note that if you are altering Microsoft Teams sync settings you must
   * enable the Microsoft Group enrollment syncing feature flag. In addition,
   * if you are enabling Microsoft Teams sync, you must also specify a tenant,
   * login attribute, and a remote attribute. Specifying a suffix to use is
   * optional.
   */
  'account[settings][microsoft_sync_enabled]': boolean;
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
  /** Lock this setting for sub-accounts and courses */
  'account[settings][restrict_student_future_view][locked]': boolean;
  /** Disable comments on announcements */
  'account[settings][lock_all_announcements][value]': boolean;
  /** Lock this setting for sub-accounts and courses */
  'account[settings][lock_all_announcements][locked]': boolean;
  /**
   * Copyright and license information must be provided for files before they
   * are published.
   */
  'account[settings][usage_rights_required][value]': boolean;
  /** Lock this setting for sub-accounts and courses */
  'account[settings][usage_rights_required][locked]': boolean;
  /** Restrict students from viewing future enrollments in course list */
  'account[settings][restrict_student_future_listing][value]': boolean;
  /** Lock this setting for sub-accounts and courses */
  'account[settings][restrict_student_future_listing][locked]': boolean;
  /**
   * Enable or disable individual learning paths for students based on
   * assessment
   */
  'account[settings][conditional_release][value]': boolean;
  /** Lock this setting for sub-accounts and courses */
  'account[settings][conditional_release][locked]': boolean;
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
   */
  'account[settings][password_policy]': Record<string, JSONValue>;
  /** Enable or disable Canvas for Elementary for this account */
  'account[settings][enable_as_k5_account][value]': boolean;
  /**
   * Whether or not the classic font is used on the dashboard. Only applies if
   * enable_as_k5_account is true.
   */
  'account[settings][use_classic_font_in_k5][value]': boolean;
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
  /** [DEPRECATED] Restrict instructors from changing mastery scale */
  'account[settings][lock_outcome_proficiency][value]': boolean;
  /** [DEPRECATED] Lock this setting for sub-accounts and courses */
  'account[lock_outcome_proficiency][locked]': boolean;
  /**
   * [DEPRECATED] Restrict instructors from changing proficiency calculation
   * method
   */
  'account[settings][lock_proficiency_calculation][value]': boolean;
  /** [DEPRECATED] Lock this setting for sub-accounts and courses */
  'account[lock_proficiency_calculation][locked]': boolean;
  /**
   * Give this a set of keys and boolean values to enable or disable services
   * matching the keys
   */
  'account[services]': Record<string, JSONValue>;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update an account
 *
 * Update an existing account.
 *
 * Nickname: update_account
 */
export async function update({ parameters }: Options): Promise<Account> {
  return await (
    await fetch(`/v1/accounts/{id}`, { method: 'PUT', body: parameters })
  ).json();
}
