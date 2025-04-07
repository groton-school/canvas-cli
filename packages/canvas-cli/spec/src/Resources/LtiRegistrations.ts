import { LtiRegistrationAccountBinding } from '';
import { User } from './Users.js';

/** A registration of an LTI tool in Canvas */
export type LtiRegistration = {
  /**
   * The Canvas ID of the Lti::Registration object
   *
   * Type: integer
   */
  id: number;
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
  account_id: number;
  /** Flag indicating if registration is internally-owned */
  internal_service: boolean;
  /**
   * Flag indicating if registration is owned by this account, or inherited from
   * Site Admin
   */
  inherited: boolean;
  /** LTI version of the registration, either 1.1 or 1.3 */
  lti_version: string;
  /**
   * Flag indicating if registration was created using LTI Dynamic Registration.
   * Only present if lti_version is 1.3
   */
  dynamic_registration: boolean;
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
  root_account_id: number;
  /** The binding for this registration and this account */
  account_binding: LtiRegistrationAccountBinding;
  /** The Canvas-style tool configuration for this registration */
  configuration: LtiToolConfiguration;
};

/** A legacy configuration format for LTI 1.3 tools. */
export type LtiLegacyConfiguration = {
  /** The display name of the tool */
  title: string;
  /** The description of the tool */
  description: string;
  /** A key-value listing of all custom fields the tool has requested */
  custom_fields: object;
  /** The default launch URL for the tool. Overridable by placements. */
  target_link_uri: string;
  /** 1.3 specific. URL used for initial login request */
  oidc_initiation_url: string;
  /** 1.3 specific. Region-specific login URLs for data protection compliance */
  oidc_initiation_urls: object;
  /**
   * 1.3 specific. The tool's public JWK in JSON format. Discouraged in favor of
   * a url hosting a JWK set.
   */
  public_jwk: object;
  /**
   * 1.3 specific. The tool-hosted URL containing its public JWK keyset. Canvas
   * may cache JWKs up to 5 minutes.
   */
  public_jwk_url: string;
  /** 1.3 specific. List of LTI scopes requested by the tool */
  scopes: string[];
  /** Array of extensions for the tool */
  extensions: string[];
};

/** A Registration's Canvas-specific tool configuration. */
export type LtiToolConfiguration = {
  /** The display name of the tool */
  title: string;
  /** The description of the tool */
  description: string;
  /** A key-value listing of all custom fields the tool has requested */
  custom_fields: object;
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
  /** 1.3 specific. Region-specific login URLs for data protection compliance */
  oidc_initiation_urls: object;
  /**
   * 1.3 specific. The tool's public JWK in JSON format. Discouraged in favor of
   * a url hosting a JWK set.
   */
  public_jwk: object;
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
  placements: string[];
};

/** Default launch settings for all placements */
export type LtiLaunchSettings = {
  /** Default message type for all placements */
  message_type: string;
  /** The text of the link to the tool (if applicable). */
  text: string;
  /** Canvas-specific i18n for placement text. See the Navigation Placement docs. */
  labels: object;
  /**
   * Placement-specific custom fields to send in the launch. Merged with
   * tool-level custom fields.
   */
  custom_fields: object;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   */
  selection_height: number;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   */
  selection_width: number;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   */
  launch_height: number;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   */
  launch_width: number;
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
   */
  prefer_sis_email: boolean;
  /**
   * 1.1 specific. If true, query parameters from the launch URL will not be
   * copied to the POST body.
   */
  oauth_compliant: boolean;
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
   */
  use_tray: boolean;
};

/** The tool's configuration for a specific placement */
export type LtiPlacement = {
  /** The name of the placement. */
  placement: string;
  /** If true, the tool will show in this placement. If false, it will not. */
  enabled: boolean;
  /** Default message type for all placements */
  message_type: string;
  /** The text of the link to the tool (if applicable). */
  text: string;
  /** Canvas-specific i18n for placement text. See the Navigation Placement docs. */
  labels: object;
  /**
   * Placement-specific custom fields to send in the launch. Merged with
   * tool-level custom fields.
   */
  custom_fields: object;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   */
  selection_height: number;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   */
  selection_width: number;
  /**
   * Default iframe height. Not valid for all placements. Overrides tool-level
   * launch_height.
   */
  launch_height: number;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   */
  launch_width: number;
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
   */
  prefer_sis_email: boolean;
  /**
   * (Only applies to 1.1) If true, Canvas will not copy launch URL query
   * parameters to the POST body.
   */
  oauth_compliant: boolean;
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
   */
  use_tray: boolean;
};

/** Changes made by a Canvas admin to a tool's configuration. */
export type LtiOverlay = {
  /** The display name of the tool */
  title: string;
  /** The description of the tool */
  description: string;
  /** A key-value listing of all custom fields the tool has requested */
  custom_fields: object;
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
  /** Placement-specific settings changed by an admin */
  placements: object;
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
   */
  launch_height: number;
  /**
   * Default iframe width. Not valid for all placements. Overrides tool-level
   * launch_width.
   */
  launch_width: number;
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
  total: number;
  /** The paginated list of LTI::Registrations */
  data: string[];
};
