import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { User } from './Users.js';

/** A registration of an LTI tool in Canvas */
export type LtiRegistration = {
  /**
   * The Canvas ID of the Lti::Registration object
   *
   * Type: integer
   */
  id: number | string;
  /** Tool-provided registration name */
  name: string;
  /** Admin-configured friendly display name */
  admin_nickname: string;
  /** Tool-provided URL to the tool's icon */
  icon_url: string;
  /** Tool-provided name of the tool vendor */
  vendor: string;
  /**
   * The Canvas id of the account that owns this registration
   *
   * Type: integer
   */
  account_id: number | string;
  /**
   * Flag indicating if registration is internally-owned
   *
   * Type: boolean
   */
  internal_service: boolean | string;
  /**
   * Flag indicating if registration is owned by this account, or inherited from
   * Site Admin
   *
   * Type: boolean
   */
  inherited: boolean | string;
  /** LTI version of the registration, either 1.1 or 1.3 */
  lti_version: string;
  /**
   * Flag indicating if registration was created using LTI Dynamic Registration.
   * Only present if lti_version is 1.3
   *
   * Type: boolean
   */
  dynamic_registration: boolean | string;
  /** The state of the registration */
  workflow_state: string;
  /** Timestamp of the registration's creation */
  created_at: string;
  /** Timestamp of the registration's last update */
  updated_at: string;
  /**
   * The user that created this registration. Not always present. If a string,
   * this registration was created by Instructure.
   */
  created_by: User;
  /**
   * The user that last updated this registration. Not always present. If a
   * string, this registration was last updated by Instructure.
   */
  updated_by: User;
  /**
   * The Canvas id of the root account
   *
   * Type: integer
   */
  root_account_id: number | string;
  /** The binding for this registration and this account */
  account_binding: LtiRegistrationAccountBinding;
  /** The Canvas-style tool configuration for this registration */
  configuration: LtiToolConfiguration;
};

/**
 * A binding between an LTI registration and an account, defining the
 * registration's availability in that account
 */
export type LtiRegistrationAccountBinding = {
  /**
   * The Canvas ID of the Lti::RegistrationAccountBinding object
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The Canvas id of the account
   *
   * Type: integer
   */
  account_id: number | string;
  /**
   * The Canvas id of the root account
   *
   * Type: integer
   */
  root_account_id: number | string;
  /**
   * The Canvas id of the Lti::Registration
   *
   * Type: integer
   */
  registration_id: number | string;
  /** The state of the binding (on, off, allow, deleted) */
  workflow_state: string;
  /** Timestamp of the binding's creation */
  created_at: string;
  /** Timestamp of the binding's last update */
  updated_at: string;
  /** The user that created this binding */
  created_by: User;
  /** The user that last updated this binding */
  updated_by: User;
};

/** A legacy configuration format for LTI 1.3 tools. */
export type LtiLegacyConfiguration = {
  /** The display name of the tool */
  title: string;
  /** The description of the tool */
  description: string;
  /**
   * A key-value listing of all custom fields the tool has requested
   *
   * Object
   */
  custom_fields: JSONObject;
  /** The default launch URL for the tool. Overridable by placements. */
  target_link_uri: string;
  /** 1.3 specific. URL used for initial login request */
  oidc_initiation_url: string;
  /**
   * 1.3 specific. Region-specific login URLs for data protection compliance
   *
   * Object
   */
  oidc_initiation_urls: JSONObject;
  /**
   * 1.3 specific. The tool's public JWK in JSON format. Discouraged in favor of
   * a url hosting a JWK set.
   *
   * Object
   */
  public_jwk: JSONObject;
  /**
   * 1.3 specific. The tool-hosted URL containing its public JWK keyset. Canvas
   * may cache JWKs up to 5 minutes.
   */
  public_jwk_url: string;
  /** 1.3 specific. List of LTI scopes requested by the tool */
  scopes: string[];
  /** Array of extensions for the tool */
  extensions: JSONObject[];
};

/** A Registration's Canvas-specific tool configuration. */
export type LtiToolConfiguration = {
  /** The display name of the tool */
  title: string;
  /** The description of the tool */
  description: string;
  /**
   * A key-value listing of all custom fields the tool has requested
   *
   * Object
   */
  custom_fields: JSONObject;
  /** The default launch URL for the tool. Overridable by placements. */
  target_link_uri: string;
  /**
   * The tool's main domain. Highly recommended for deep linking, used to match
   * links to the tool.
   */
  domain: string;
  /** Tool-provided identifier, can be anything */
  tool_id: string;
  /** Canvas-defined privacy level for the tool */
  privacy_level: string;
  /** 1.3 specific. URL used for initial login request */
  oidc_initiation_url: string;
  /**
   * 1.3 specific. Region-specific login URLs for data protection compliance
   *
   * Object
   */
  oidc_initiation_urls: JSONObject;
  /**
   * 1.3 specific. The tool's public JWK in JSON format. Discouraged in favor of
   * a url hosting a JWK set.
   *
   * Object
   */
  public_jwk: JSONObject;
  /**
   * 1.3 specific. The tool-hosted URL containing its public JWK keyset. Canvas
   * may cache JWKs up to 5 minutes.
   */
  public_jwk_url: string;
  /** 1.3 specific. List of LTI scopes requested by the tool */
  scopes: string[];
  /**
   * 1.3 specific. List of possible launch URLs for after the Canvas authorize
   * redirect step
   */
  redirect_uris: string[];
  /** Default launch settings for all placements */
  launch_settings: LtiLaunchSettings;
  /** List of placements configured by the tool */
  placements: LtiPlacement[];
};

/** Default launch settings for all placements */
export type LtiLaunchSettings = {
  /** Default message type for all placements */
  message_type: string;
  /** The text of the link to the tool (if applicable). */
  text: string;
  /**
   * Canvas-specific i18n for placement text. See the Navigation Placement docs.
   *
   * Object
   */
  labels: JSONObject;
  /**
   * Placement-specific custom fields to send in the launch. Merged with
   * tool-level custom fields.
   *
   * Object
   */
  custom_fields: JSONObject;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   *
   * Type: number
   */
  selection_height: number | string;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   *
   * Type: number
   */
  selection_width: number | string;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   *
   * Type: number
   */
  launch_height: number | string;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   *
   * Type: number
   */
  launch_width: number | string;
  /**
   * Default icon URL. Not valid for all placements. Overrides tool-level
   * icon_url.
   */
  icon_url: string;
  /**
   * The HTML class name of an InstUI Icon. Used instead of an icon_url in
   * select placements.
   */
  canvas_icon_class: string;
  /**
   * Comma-separated list of Canvas permission short names required for a user
   * to launch from this placement.
   */
  required_permissions: string;
  /** When set to '_blank', opens placement in a new tab. */
  windowTarget: string;
  /**
   * The Canvas layout to use when launching the tool. See the Navigation
   * Placement docs.
   */
  display_type: string;
  /** The 1.1 launch URL for this placement. Overrides tool-level url. */
  url: string;
  /**
   * The 1.3 launch URL for this placement. Overrides tool-level
   * target_link_uri.
   */
  target_link_uri: string;
  /**
   * Specifies types of users that can see this placement. Only valid for some
   * placements like course_navigation.
   */
  visibility: string;
  /**
   * 1.1 specific. If true, the tool will send the SIS email in the
   * lis_person_contact_email_primary launch property
   *
   * Type: boolean
   */
  prefer_sis_email: boolean | string;
  /**
   * 1.1 specific. If true, query parameters from the launch URL will not be
   * copied to the POST body.
   *
   * Type: boolean
   */
  oauth_compliant: boolean | string;
  /** An SVG to use instead of an icon_url. Only valid for global_navigation. */
  icon_svg_path_64: string;
  /**
   * Default display state for course_navigation. If 'enabled', will show in
   * course sidebar. If 'disabled', will be hidden.
   */
  default: string;
  /**
   * Comma-separated list of media types that the tool can accept. Only valid
   * for file_item.
   */
  accept_media_types: string;
  /**
   * If true, the tool will be launched in the tray. Only used by the
   * editor_button placement.
   *
   * Type: boolean
   */
  use_tray: boolean | string;
};

/** The tool's configuration for a specific placement */
export type LtiPlacement = {
  /** The name of the placement. */
  placement: string;
  /**
   * If true, the tool will show in this placement. If false, it will not.
   *
   * Type: boolean
   */
  enabled: boolean | string;
  /** Default message type for all placements */
  message_type: string;
  /** The text of the link to the tool (if applicable). */
  text: string;
  /**
   * Canvas-specific i18n for placement text. See the Navigation Placement docs.
   *
   * Object
   */
  labels: JSONObject;
  /**
   * Placement-specific custom fields to send in the launch. Merged with
   * tool-level custom fields.
   *
   * Object
   */
  custom_fields: JSONObject;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   *
   * Type: number
   */
  selection_height: number | string;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   *
   * Type: number
   */
  selection_width: number | string;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   *
   * Type: number
   */
  launch_height: number | string;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   *
   * Type: number
   */
  launch_width: number | string;
  /**
   * Default icon URL. Not valid for all placements. Overrides tool-level
   * icon_url.
   */
  icon_url: string;
  /**
   * The HTML class name of an InstUI Icon. Used instead of an icon_url in
   * select placements.
   */
  canvas_icon_class: string;
  /**
   * Comma-separated list of Canvas permission short names required for a user
   * to launch from this placement.
   */
  required_permissions: string;
  /** When set to '_blank', opens placement in a new tab. */
  windowTarget: string;
  /**
   * The Canvas layout to use when launching the tool. See the Navigation
   * Placement docs.
   */
  display_type: string;
  /** The 1.1 launch URL for this placement. Overrides tool-level url. */
  url: string;
  /**
   * The 1.3 launch URL for this placement. Overrides tool-level
   * target_link_uri.
   */
  target_link_uri: string;
  /**
   * Specifies types of users that can see this placement. Only valid for some
   * placements like course_navigation.
   */
  visibility: string;
  /**
   * 1.1 specific. If true, the tool will send the SIS email in the
   * lis_person_contact_email_primary launch property
   *
   * Type: boolean
   */
  prefer_sis_email: boolean | string;
  /**
   * 1.1 specific. If true, query parameters from the launch URL will not be
   * copied to the POST body.
   *
   * Type: boolean
   */
  oauth_compliant: boolean | string;
  /** An SVG to use instead of an icon_url. Only valid for global_navigation. */
  icon_svg_path_64: string;
  /**
   * Default display state for course_navigation. If 'enabled', will show in
   * course sidebar. If 'disabled', will be hidden.
   */
  default: string;
  /**
   * Comma-separated list of media types that the tool can accept. Only valid
   * for file_item.
   */
  accept_media_types: string;
  /**
   * If true, the tool will be launched in the tray. Only used by the
   * editor_button placement.
   *
   * Type: boolean
   */
  use_tray: boolean | string;
};

/** Changes made by a Canvas admin to a tool's configuration. */
export type LtiOverlay = {
  /** The display name of the tool */
  title: string;
  /** The description of the tool */
  description: string;
  /**
   * A key-value listing of all custom fields the tool has requested
   *
   * Object
   */
  custom_fields: JSONObject;
  /** The default launch URL for the tool. Overridable by placements. */
  target_link_uri: string;
  /**
   * The tool's main domain. Highly recommended for deep linking, used to match
   * links to the tool.
   */
  domain: string;
  /** Canvas-defined privacy level for the tool */
  privacy_level: string;
  /** 1.3 specific. URL used for initial login request */
  oidc_initiation_url: string;
  /**
   * 1.3 specific. List of LTI scopes that the tool has requested but an admin
   * has disabled
   */
  disabled_scopes: string[];
  /** List of placements that the tool has requested but an admin has disabled */
  disabled_placements: string[];
  /**
   * Placement-specific settings changed by an admin
   *
   * Object
   */
  placements: JSONObject;
};

/** A single version of a tool's configuration overlay */
export type LtiOverlayVersion = {
  /**
   * The Canvas id of the root account
   *
   * Type: integer
   */
  root_account_id: number | string;
  /** Timestamp of the version's creation */
  created_at: string;
  /** Timestamp of the version's last update */
  updated_at: string;
  /**
   * Whether or not this change was caused by a reset of the tool's
   * configuration
   *
   * Type: boolean
   */
  caused_by_reset: boolean | string;
  /**
   * The user that created this version. If a string, this registration was
   * created by Instructure.
   */
  created_by: User;
  /** A list of changes made in this version compared to the previous version */
  diff: JSONObject[][];
  /**
   * The id of the overlay this version is for
   *
   * Type: integer
   */
  lti_overlay_id: number | string;
  /**
   * The id of the account this version is for
   *
   * Type: integer
   */
  account_id: number | string;
};

/**
 * Changes made by a Canvas admin to a tool's configuration for a specific
 * placement.
 */
export type LtiPlacementOverlay = {
  /** The text of the link to the tool (if applicable). */
  text: string;
  /** The default launch URL for the tool. Overridable by placements. */
  target_link_uri: string;
  /** Default message type for all placements */
  message_type: string;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   *
   * Type: number
   */
  launch_height: number | string;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   *
   * Type: number
   */
  launch_width: number | string;
  /**
   * Default icon URL. Not valid for all placements. Overrides tool-level
   * icon_url.
   */
  icon_url: string;
  /**
   * Default display state for course_navigation. If 'enabled', will show in
   * course sidebar. If 'disabled', will be hidden.
   */
  default: string;
};

/** The response for the List LTI Registrations API endpoint */
export type ListLtiRegistrationsResponse = {
  /**
   * The total number of LTI registrations across all pages
   *
   * Type: integer
   */
  total: number | string;
  /** The paginated list of LTI::Registrations */
  data: LtiRegistration[];
};

/** The response for the Search Accounts and Courses API endpoint */
export type ContextSearchResponse = {
  /** Accounts that match the search query. Limited to 100. */
  accounts: SearchableAccount[];
  /** Courses that match the search query. Limited to 100. */
  courses: SearchableCourse[];
};

/** A minimal representation of an Account for Canvas Apps search purposes */
export type SearchableAccount = {
  /** The Canvas DB ID */
  id: string;
  /** The account name */
  name: string;
  /**
   * The SIS ID of the account, if any. Only present if user can read or manage
   * SIS.
   */
  sis_id: string;
  /**
   * Names of the accounts in this account's hierarchy, excluding the root and
   * this account.
   */
  display_path: string[];
};

/** A minimal representation of a Course for Canvas Apps search purposes */
export type SearchableCourse = {
  /** The Canvas DB ID */
  id: string;
  /** The course name */
  name: string;
  /**
   * The SIS ID of the course, if any. Only present if user can read or manage
   * SIS.
   */
  sis_id: string;
  /**
   * Names of the accounts in this course's account hierarchy, excluding the
   * root.
   */
  display_path: string[];
  /** The course code */
  course_code: string;
};
