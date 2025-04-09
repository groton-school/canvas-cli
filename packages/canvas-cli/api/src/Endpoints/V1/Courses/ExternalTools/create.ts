import { client } from '../../../../Client.js';

type createPathParameters = {
  /** ID */
  course_id: string;
};

type createFormParameters = {
  /**
   * The client id is attached to the developer key. If supplied all other
   * parameters are unnecessary and will be ignored
   */
  client_id: string;
  /** The name of the tool */
  name: string;
  /** How much user information to send to the external tool. */
  privacy_level: string;
  /** The consumer key for the external tool */
  consumer_key: string;
  /** The shared secret with the external tool */
  shared_secret: string;
  /** A description of the tool */
  description: string;
  /**
   * The url to match links against. Either "url" or "domain" should be set,
   * not both.
   */
  url: string;
  /**
   * The domain to match links against. Either "url" or "domain" should be
   * set, not both.
   */
  domain: string;
  /** The url of the icon to show for this tool */
  icon_url: string;
  /** The default text to show for this tool */
  text: string;
  /**
   * Custom fields that will be sent to the tool consumer; can be used
   * multiple times
   */
  'custom_fields[field_name]': string;
  /**
   * (Deprecated in favor of {api:ExternalToolsController#add_rce_favorite Add
   * tool to RCE Favorites} and
   * {api:ExternalToolsController#remove_rce_favorite Remove tool from RCE
   * Favorites}) Whether this tool should appear in a preferred location in
   * the RCE. This only applies to tools in root account contexts that have an
   * editor button placement.
   */
  is_rce_favorite: boolean;
  /** The url of the external tool for account navigation */
  'account_navigation[url]': string;
  /** Set this to enable this feature */
  'account_navigation[enabled]': boolean;
  /** The text that will show on the left-tab in the account navigation */
  'account_navigation[text]': string;
  /** The width of the dialog the tool is launched in */
  'account_navigation[selection_width]': string;
  /** The height of the dialog the tool is launched in */
  'account_navigation[selection_height]': string;
  /**
   * The layout type to use when launching the tool. Must be "full_width",
   * "full_width_in_context", "in_nav_context", "borderless", or "default"
   */
  'account_navigation[display_type]': string;
  /** The url of the external tool for user navigation */
  'user_navigation[url]': string;
  /** Set this to enable this feature */
  'user_navigation[enabled]': boolean;
  /** The text that will show on the left-tab in the user navigation */
  'user_navigation[text]': string;
  /**
   * Who will see the navigation tab. "admins" for admins, "public" or
   * "members" for everyone. Setting this to `null` will remove this
   * configuration and use the default behavior, which is "public".
   */
  'user_navigation[visibility]': string;
  /** The url of the external tool for right-side course home navigation menu */
  'course_home_sub_navigation[url]': string;
  /** Set this to enable this feature */
  'course_home_sub_navigation[enabled]': boolean;
  /** The text that will show on the right-side course home navigation menu */
  'course_home_sub_navigation[text]': string;
  /** The url of the icon to show in the right-side course home navigation menu */
  'course_home_sub_navigation[icon_url]': string;
  /** Set this to enable this feature */
  'course_navigation[enabled]': boolean;
  /** The text that will show on the left-tab in the course navigation */
  'course_navigation[text]': string;
  /**
   * Who will see the navigation tab. "admins" for course admins, "members"
   * for students, "public" for everyone. Setting this to `null` will remove
   * this configuration and use the default behavior, which is "public".
   */
  'course_navigation[visibility]': string;
  /**
   * Determines how the navigation tab will be opened. "_blank" Launches the
   * external tool in a new window or tab. "_self" (Default) Launches the
   * external tool in an iframe inside of Canvas.
   */
  'course_navigation[windowTarget]': string;
  /**
   * If set to "disabled" the tool will not appear in the course navigation
   * until a teacher explicitly enables it.
   *
   * If set to "enabled" the tool will appear in the course navigation without
   * requiring a teacher to explicitly enable it.
   *
   * Defaults to "enabled"
   */
  'course_navigation[default]': string;
  /**
   * The layout type to use when launching the tool. Must be "full_width",
   * "full_width_in_context", "in_nav_context", "borderless", or "default"
   */
  'course_navigation[display_type]': string;
  /** The url of the external tool */
  'editor_button[url]': string;
  /** Set this to enable this feature */
  'editor_button[enabled]': boolean;
  /** The url of the icon to show in the WYSIWYG editor */
  'editor_button[icon_url]': string;
  /** The width of the dialog the tool is launched in */
  'editor_button[selection_width]': string;
  /** The height of the dialog the tool is launched in */
  'editor_button[selection_height]': string;
  /**
   * Set this to ContentItemSelectionRequest to tell the tool to use
   * content-item; otherwise, omit
   */
  'editor_button[message_type]': string;
  /** The url of the external tool */
  'homework_submission[url]': string;
  /** Set this to enable this feature */
  'homework_submission[enabled]': boolean;
  /** The text that will show on the homework submission tab */
  'homework_submission[text]': string;
  /**
   * Set this to ContentItemSelectionRequest to tell the tool to use
   * content-item; otherwise, omit
   */
  'homework_submission[message_type]': string;
  /** The url of the external tool */
  'link_selection[url]': string;
  /** Set this to enable this feature */
  'link_selection[enabled]': boolean;
  /** The text that will show for the link selection text */
  'link_selection[text]': string;
  /**
   * Set this to ContentItemSelectionRequest to tell the tool to use
   * content-item; otherwise, omit
   */
  'link_selection[message_type]': string;
  /** The url of the external tool */
  'migration_selection[url]': string;
  /** Set this to enable this feature */
  'migration_selection[enabled]': boolean;
  /**
   * Set this to ContentItemSelectionRequest to tell the tool to use
   * content-item; otherwise, omit
   */
  'migration_selection[message_type]': string;
  /** The url of the external tool */
  'tool_configuration[url]': string;
  /** Set this to enable this feature */
  'tool_configuration[enabled]': boolean;
  /**
   * Set this to ContentItemSelectionRequest to tell the tool to use
   * content-item; otherwise, omit
   */
  'tool_configuration[message_type]': string;
  /**
   * Set this to default the lis_person_contact_email_primary to prefer
   * provisioned sis_email; otherwise, omit
   */
  'tool_configuration[prefer_sis_email]': boolean;
  /** The url of the external tool */
  'resource_selection[url]': string;
  /**
   * Set this to enable this feature. If set to false, not_selectable must
   * also be set to true in order to hide this tool from the selection UI in
   * modules and assignments.
   */
  'resource_selection[enabled]': boolean;
  /** The url of the icon to show in the module external tool list */
  'resource_selection[icon_url]': string;
  /** The width of the dialog the tool is launched in */
  'resource_selection[selection_width]': string;
  /** The height of the dialog the tool is launched in */
  'resource_selection[selection_height]': string;
  /**
   * Configuration can be passed in as CC xml instead of using query
   * parameters. If this value is "by_url" or "by_xml" then an xml
   * configuration will be expected in either the "config_xml" or "config_url"
   * parameter. Note that the name parameter overrides the tool name provided
   * in the xml
   */
  config_type: string;
  /**
   * XML tool configuration, as specified in the CC xml specification. This is
   * required if "config_type" is set to "by_xml"
   */
  config_xml: string;
  /**
   * URL where the server can retrieve an XML tool configuration, as specified
   * in the CC xml specification. This is required if "config_type" is set to
   * "by_url"
   */
  config_url: string;
  /**
   * Default: false. If set to true, and if resource_selection is set to
   * false, the tool won't show up in the external tool selection UI in
   * modules and assignments
   */
  not_selectable: boolean;
  /**
   * Default: false, if set to true LTI query params will not be copied to the
   * post body.
   */
  oauth_compliant: boolean;
  /** The unique identifier for the tool in LearnPlatform */
  unified_tool_id: string;
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create an external tool
 *
 * Create an external tool in the specified course/account. The created tool
 * will be returned, see the "show" endpoint for an example. If a client ID is
 * supplied canvas will attempt to create a context external tool using the LTI
 * 1.3 standard.
 *
 * Nickname: create_external_tool_courses
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/external_tools`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
