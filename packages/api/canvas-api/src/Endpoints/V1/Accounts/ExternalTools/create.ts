import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ContextExternalTool } from '../../../../Resources/ExternalTools.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
   * (Deprecated in favor of {api:ExternalToolsController#mark_rce_favorite
   * Mark tool to RCE Favorites} and
   * {api:ExternalToolsController#unmark_rce_favorite Unmark tool from RCE
   * Favorites}) Whether this tool should appear in a preferred location in
   * the RCE. This only applies to tools in root account contexts that have an
   * editor button placement.
   *
   * Type: boolean
   */
  is_rce_favorite: boolean | string;
  /**
   * Set the <placement_configuration_key> value for a specific placement.
   *
   * Variable
   */
  '<placement_name>[<placement_configuration_key>]': JSONValue;
  /**
   * Configuration can be passed in as Common Cartridge XML instead of using
   * query parameters. If this value is "by_url" or "by_xml" then an XML
   * configuration will be expected in either the "config_xml" or "config_url"
   * parameter. Note that the name parameter overrides the tool name provided
   * in the XML.
   */
  config_type: string;
  /**
   * XML tool configuration, as specified in the Common Cartridge XML
   * specification. This is required if "config_type" is set to "by_xml"
   */
  config_xml: string;
  /**
   * URL where the server can retrieve an XML tool configuration, as specified
   * in the Common Cartridge XML specification. This is required if
   * "config_type" is set to "by_url"
   */
  config_url: string;
  /**
   * Default: false. If set to true, and if resource_selection is set to
   * false, the tool won't show up in the external tool selection UI in
   * modules and assignments
   *
   * Type: boolean
   */
  not_selectable: boolean | string;
  /**
   * Default: false, if set to true LTI query params will not be copied to the
   * post body.
   *
   * Type: boolean
   */
  oauth_compliant: boolean | string;
  /** The unique identifier for the tool in LearnPlatform */
  unified_tool_id: string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create an external tool
 *
 * Create an external tool in the specified course/account. The created tool
 * will be returned, see the "show" endpoint for an example. If a client ID is
 * supplied canvas will attempt to create a context external tool using the LTI
 * 1.3 standard.
 *
 * See the <a href="file.lti_dev_key_config.html#placements-params">Placements
 * Documentation</a> for more information on what placements are available, the
 * possible fields, and their accepted values.
 *
 * Nickname: create_external_tool_accounts
 */
export async function create(options: Options) {
  const response = await client().fetchAs<ContextExternalTool>(
    `/api/v1/accounts/{account_id}/external_tools`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
