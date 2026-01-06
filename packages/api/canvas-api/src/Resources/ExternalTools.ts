import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/** An external tool configured for a specific context */
export type ContextExternalTool = {
  /**
   * The unique identifier for the external tool
   *
   * Type: integer
   */
  id: number | string;
  /** The name of the external tool */
  name: string;
  /** A description of the external tool */
  description: string;
  /** The launch URL for the external tool */
  url: string;
  /**
   * The domain to match links against. Note that this doesn't contain the
   * protocol.
   */
  domain: string;
  /**
   * The consumer key used by the tool (The associated shared secret is not
   * returned)
   */
  consumer_key: string;
  /** Timestamp of the tool's creation */
  created_at: string;
  /** Timestamp of the tool's last update */
  updated_at: string;
  /** How much user information to send to the external tool */
  privacy_level: string;
  /**
   * Custom fields that will be sent to the tool consumer
   *
   * Object
   */
  custom_fields: JSONObject;
  /** The current state of the external tool */
  workflow_state: string;
  /**
   * Boolean determining whether this tool should be in a preferred location in
   * the RCE. Only present if the tool can be an RCE favorite.
   *
   * Type: boolean
   */
  is_rce_favorite: boolean | string;
  /**
   * Boolean determining whether this tool should have a dedicated button in Top
   * Navigation. Only present if the tool can be a top nav favorite.
   *
   * Type: boolean
   */
  is_top_nav_favorite: boolean | string;
  /**
   * The pixel width of the iFrame that the tool will be rendered in
   *
   * Type: integer
   */
  selection_width: number | string;
  /**
   * The pixel height of the iFrame that the tool will be rendered in
   *
   * Type: integer
   */
  selection_height: number | string;
  /** The URL for the tool icon */
  icon_url: string;
  /**
   * Whether the tool is not selectable from assignment and modules
   *
   * Type: boolean
   */
  not_selectable: boolean | string;
  /** The LTI version of the tool */
  version: string;
  /** The unique identifier for the tool in LearnPlatform */
  unified_tool_id: string;
  /**
   * The developer key id associated with this tool. Only present for LTI 1.3
   * tools.
   *
   * Type: integer
   */
  developer_key_id: number | string;
  /**
   * The LTI registration id associated with this tool. Only present for LTI 1.3
   * tools.
   *
   * Type: integer
   */
  lti_registration_id: number | string;
  /** The unique identifier for the deployment of the tool */
  deployment_id: string;
  /**
   * Whether the tool can access the membership service. Only present if the
   * feature is enabled.
   *
   * Type: boolean
   */
  allow_membership_service_access: boolean | string;
  /**
   * Whether to send the SIS email address in launches
   *
   * Type: boolean
   */
  prefer_sis_email: boolean | string;
  /**
   * The estimated duration for completing this tool. Only present for horizon
   * courses when the tool has an estimated duration.
   */
  estimated_duration: EstimatedDuration;
  /**
   * Configuration for account navigation placement. Null if not configured for
   * this placement.
   */
  account_navigation: ContextExternalToolPlacement;
  /**
   * Configuration for analytics hub placement. Null if not configured for this
   * placement.
   */
  analytics_hub: ContextExternalToolPlacement;
  /**
   * Configuration for assignment edit placement. Null if not configured for
   * this placement.
   */
  assignment_edit: ContextExternalToolPlacement;
  /**
   * Configuration for assignment group menu placement. Null if not configured
   * for this placement.
   */
  assignment_group_menu: ContextExternalToolPlacement;
  /**
   * Configuration for assignment index menu placement. Null if not configured
   * for this placement.
   */
  assignment_index_menu: ContextExternalToolPlacement;
  /**
   * Configuration for assignment menu placement. Null if not configured for
   * this placement.
   */
  assignment_menu: ContextExternalToolPlacement;
  /**
   * Configuration for assignment selection placement. Null if not configured
   * for this placement.
   */
  assignment_selection: ContextExternalToolPlacement;
  /**
   * Configuration for assignment view placement. Null if not configured for
   * this placement.
   */
  assignment_view: ContextExternalToolPlacement;
  /**
   * Configuration for collaboration placement. Null if not configured for this
   * placement.
   */
  collaboration: ContextExternalToolPlacement;
  /**
   * Configuration for conference selection placement. Null if not configured
   * for this placement.
   */
  conference_selection: ContextExternalToolPlacement;
  /**
   * Configuration for course assignments menu placement. Null if not configured
   * for this placement.
   */
  course_assignments_menu: ContextExternalToolPlacement;
  /**
   * Configuration for course home sub navigation placement. Null if not
   * configured for this placement.
   */
  course_home_sub_navigation: ContextExternalToolPlacement;
  /**
   * Configuration for course navigation placement. Null if not configured for
   * this placement.
   */
  course_navigation: ContextExternalToolPlacement;
  /**
   * Configuration for course settings sub navigation placement. Null if not
   * configured for this placement.
   */
  course_settings_sub_navigation: ContextExternalToolPlacement;
  /**
   * Configuration for discussion topic index menu placement. Null if not
   * configured for this placement.
   */
  discussion_topic_index_menu: ContextExternalToolPlacement;
  /**
   * Configuration for discussion topic menu placement. Null if not configured
   * for this placement.
   */
  discussion_topic_menu: ContextExternalToolPlacement;
  /**
   * Configuration for editor button placement. Null if not configured for this
   * placement.
   */
  editor_button: ContextExternalToolPlacement;
  /**
   * Configuration for file index menu placement. Null if not configured for
   * this placement.
   */
  file_index_menu: ContextExternalToolPlacement;
  /**
   * Configuration for file menu placement. Null if not configured for this
   * placement.
   */
  file_menu: ContextExternalToolPlacement;
  /**
   * Configuration for global navigation placement. Null if not configured for
   * this placement.
   */
  global_navigation: ContextExternalToolPlacement;
  /**
   * Configuration for homework submission placement. Null if not configured for
   * this placement.
   */
  homework_submission: ContextExternalToolPlacement;
  /**
   * Configuration for link selection placement. Null if not configured for this
   * placement.
   */
  link_selection: ContextExternalToolPlacement;
  /**
   * Configuration for migration selection placement. Null if not configured for
   * this placement.
   */
  migration_selection: ContextExternalToolPlacement;
  /**
   * Configuration for module group menu placement. Null if not configured for
   * this placement.
   */
  module_group_menu: ContextExternalToolPlacement;
  /**
   * Configuration for module index menu placement. Null if not configured for
   * this placement.
   */
  module_index_menu: ContextExternalToolPlacement;
  /**
   * Configuration for module index menu modal placement. Null if not configured
   * for this placement.
   */
  module_index_menu_modal: ContextExternalToolPlacement;
  /**
   * Configuration for module menu modal placement. Null if not configured for
   * this placement.
   */
  module_menu_modal: ContextExternalToolPlacement;
  /**
   * Configuration for module menu placement. Null if not configured for this
   * placement.
   */
  module_menu: ContextExternalToolPlacement;
  /**
   * Configuration for page index menu placement. Null if not configured for
   * this placement.
   */
  page_index_menu: ContextExternalToolPlacement;
  /**
   * Configuration for page menu placement. Null if not configured for this
   * placement.
   */
  page_menu: ContextExternalToolPlacement;
  /**
   * Configuration for post grades (sync grades) placement. Null if not
   * configured for this placement.
   */
  post_grades: ContextExternalToolPlacement;
  /**
   * Configuration for quiz index menu placement. Null if not configured for
   * this placement.
   */
  quiz_index_menu: ContextExternalToolPlacement;
  /**
   * Configuration for quiz menu placement. Null if not configured for this
   * placement.
   */
  quiz_menu: ContextExternalToolPlacement;
  /**
   * Configuration for resource selection placement. Null if not configured for
   * this placement. This placement is deprecated.
   */
  resource_selection: ContextExternalToolPlacement;
  /**
   * Configuration for similarity detection placement. Null if not configured
   * for this placement.
   */
  similarity_detection: ContextExternalToolPlacement;
  /**
   * Configuration for student context card placement. Null if not configured
   * for this placement.
   */
  student_context_card: ContextExternalToolPlacement;
  /**
   * Configuration for submission type selection placement. Null if not
   * configured for this placement.
   */
  submission_type_selection: ContextExternalToolPlacement;
  /**
   * Configuration for tool configuration placement. Null if not configured for
   * this placement.
   */
  tool_configuration: ContextExternalToolPlacement;
  /**
   * Configuration for top navigation placement. Null if not configured for this
   * placement.
   */
  top_navigation: ContextExternalToolPlacement;
  /**
   * Configuration for user navigation placement. Null if not configured for
   * this placement.
   */
  user_navigation: ContextExternalToolPlacement;
  /**
   * Configuration for wiki index menu placement. Null if not configured for
   * this placement.
   */
  wiki_index_menu: ContextExternalToolPlacement;
  /**
   * Configuration for wiki page menu placement. Null if not configured for this
   * placement.
   */
  wiki_page_menu: ContextExternalToolPlacement;
  /**
   * Configuration for activity asset processor placement. Null if not
   * configured for this placement.
   */
  ActivityAssetProcessor: ContextExternalToolPlacement;
  /**
   * Configuration for activity asset processor contribution placement. Null if
   * not configured for this placement.
   */
  ActivityAssetProcessorContribution: ContextExternalToolPlacement;
  /**
   * Configuration for placementless message types (currently only
   * LtiEulaRequest).
   */
  message_settings: ContextExternalToolMessageSettings[];
};

/**
 * Configuration for a specific placement of an external tool. If null, no
 * configuration is present.
 */
export type ContextExternalToolPlacement = {
  /**
   * Whether this placement is enabled
   *
   * Type: boolean
   */
  enabled: boolean | string;
  /**
   * The launch URL for this specific placement. Overrides the tool's default
   * URL. For LTI 1.1 tools only.
   */
  url: string;
  /**
   * The launch URL for this specific placement. Overrides the tool's default
   * target_link_uri. For LTI 1.3 tools only.
   */
  target_link_uri: string;
  /**
   * The text/label to display for this placement. Overridable by 'labels' in
   * placement configuration.
   */
  text: string;
  /**
   * The localized label for this placement. This is the resolved text after
   * applying internationalization.
   */
  label: string;
  /**
   * Internationalization labels for this placement. Keys are locale codes,
   * values are localized text.
   *
   * Object
   */
  labels: JSONObject;
  /**
   * The LTI message type for this placement. Not all placements support all
   * message types.
   */
  message_type: string;
  /**
   * The width of the iframe or popup for this placement
   *
   * Type: integer
   */
  selection_width: number | string;
  /**
   * The height of the iframe or popup for this placement
   *
   * Type: integer
   */
  selection_height: number | string;
  /**
   * The width of the launch window. Not standard everywhere yet.
   *
   * Type: integer
   */
  launch_width: number | string;
  /**
   * The height of the launch window. Not standard everywhere yet.
   *
   * Type: integer
   */
  launch_height: number | string;
  /** The URL of the icon for this placement */
  icon_url: string;
  /** The Canvas icon class to use for this placement instead of an icon URL */
  canvas_icon_class: string;
  /**
   * Whether to allow fullscreen mode for this placement (top_navigation
   * placement only)
   *
   * Type: boolean
   */
  allow_fullscreen: boolean | string;
  /**
   * Custom fields to be sent with this placement's launch. Merged with
   * tool-level custom fields.
   *
   * Object
   */
  custom_fields: JSONObject;
  /** Controls who can see this placement */
  visibility: string;
  /**
   * Comma-separated list of Canvas permissions required to launch from this
   * placement. The user must have all permissions in order to launch the tool.
   */
  required_permissions: string;
  /**
   * Default display state for navigation placements. Only applies to
   * account_navigation and course_navigation placements.
   */
  default: string;
  /**
   * The layout type to use when launching the tool. For global_navigation and
   * analytics_hub, defaults to 'full_width'.
   */
  display_type: string;
  /**
   * When set to '_blank', opens placement in a new tab. Only '_blank' is
   * supported.
   */
  windowTarget: string;
  /**
   * Comma-separated list of media types that the tool can accept. Only valid
   * for file_menu placement.
   */
  accept_media_types: string;
  /**
   * If true, the tool will be launched in the tray. Only used by the
   * editor_button placement.
   *
   * Type: boolean
   */
  use_tray: boolean | string;
  /**
   * An SVG path to use instead of an icon_url. Only valid for global_navigation
   * placement.
   */
  icon_svg_path_64: string;
  /**
   * Whether this placement should only be available at the root account level.
   * Only applies to account_navigation placement.
   *
   * Type: boolean
   */
  root_account_only: boolean | string;
  /**
   * A description of this placement. Only valid for submission_type_selection
   * placement. Maximum length of 255 characters.
   */
  description: string;
  /**
   * Whether resource selection is required for this placement. Only valid for
   * submission_type_selection placement.
   *
   * Type: boolean
   */
  require_resource_selection: boolean | string;
  /**
   * If true, the tool will send the SIS email in the
   * lis_person_contact_email_primary launch property. LTI 1.1 only.
   *
   * Type: boolean
   */
  prefer_sis_email: boolean | string;
  /**
   * If true, query parameters from the launch URL will not be copied to the
   * POST body. LTI 1.1 only.
   *
   * Type: boolean
   */
  oauth_compliant: boolean | string;
};

/**
 * Configuration for a placementless message type (message type that doesn't
 * belong to a specific placement)
 */
export type ContextExternalToolMessageSettings = {
  /** The message type identifier (e.g., 'LtiEulaRequest') */
  type: string;
  /**
   * Whether this message type is enabled
   *
   * Type: boolean
   */
  enabled: boolean | string;
  /** The target URI for launching this message type */
  target_link_uri: string;
  /**
   * Custom fields specific to this message type.
   *
   * Object
   */
  custom_fields: JSONObject;
};

/** An estimated duration for completing a learning activity */
export type EstimatedDuration = {
  /**
   * The unique identifier for the estimated duration
   *
   * Type: integer
   */
  id: number | string;
  /** The estimated duration in ISO 8601 format */
  duration: string;
  /** Timestamp of when the estimated duration was created */
  created_at: string;
  /** Timestamp of when the estimated duration was last updated */
  updated_at: string;
};
