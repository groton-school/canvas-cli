import { JSONValue } from '@battis/typescript-tricks';

export type Account = {
  /**
   * The ID of the Account object
   *
   * Type: integer
   */
  id: number | string;
  /** The display name of the account */
  name: string;
  /** The UUID of the account */
  uuid: string;
  /**
   * The account's parent ID, or null if this is the root account
   *
   * Type: integer
   */
  parent_account_id: number | string;
  /**
   * The ID of the root account, or null if this is the root account
   *
   * Type: integer
   */
  root_account_id: number | string;
  /**
   * The storage quota for the account in megabytes, if not otherwise specified
   *
   * Type: integer
   */
  default_storage_quota_mb: number | string;
  /**
   * The storage quota for a user in the account in megabytes, if not otherwise
   * specified
   *
   * Type: integer
   */
  default_user_storage_quota_mb: number | string;
  /**
   * The storage quota for a group in the account in megabytes, if not otherwise
   * specified
   *
   * Type: integer
   */
  default_group_storage_quota_mb: number | string;
  /**
   * The default time zone of the account. Allowed time zones are
   * {http://www.iana.org/time-zones IANA time zones} or friendlier
   * {http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on
   * Rails time zones}.
   */
  default_time_zone: string;
  /**
   * The account's identifier in the Student Information System. Only included
   * if the user has permission to view SIS information.
   */
  sis_account_id: string;
  /**
   * The account's identifier in the Student Information System. Only included
   * if the user has permission to view SIS information.
   */
  integration_id: string;
  /**
   * The id of the SIS import if created through SIS. Only included if the user
   * has permission to manage SIS information.
   *
   * Type: integer
   */
  sis_import_id: number | string;
  /**
   * The number of courses directly under the account (available via include)
   *
   * Type: integer
   */
  course_count: number | string;
  /**
   * The number of sub-accounts directly under the account (available via
   * include)
   *
   * Type: integer
   */
  sub_account_count: number | string;
  /** The account's identifier that is sent as context_id in LTI launches. */
  lti_guid: string;
  /** The state of the account. Can be 'active' or 'deleted'. */
  workflow_state: string;
};

export type TermsOfService = {
  /**
   * Terms Of Service id
   *
   * Type: integer
   */
  id: number | string;
  /** The given type for the Terms of Service */
  terms_type: string;
  /**
   * Boolean dictating if the user must accept Terms of Service
   *
   * Type: boolean
   */
  passive: boolean | string;
  /**
   * The id of the root account that owns the Terms of Service
   *
   * Type: integer
   */
  account_id: number | string;
  /** Content of the Terms of Service */
  content: string;
  /** The type of self registration allowed */
  self_registration_type: string;
};

export type HelpLink = {
  /** The ID of the help link */
  id: string;
  /** The name of the help link */
  text: string;
  /** The description of the help link */
  subtext: string;
  /** The URL of the help link */
  url: string;
  /** The type of the help link */
  type: string;
  /** The roles that have access to this help link */
  available_to: string[];
};

export type HelpLinks = {
  /** Help link button title */
  help_link_name: string;
  /** Help link button icon */
  help_link_icon: string;
  /** Help links defined by the account. Could include default help links. */
  custom_help_links: HelpLink[];
  /**
   * Default help links provided when account has not set help links of their
   * own.
   */
  default_help_links: HelpLink[];
};
