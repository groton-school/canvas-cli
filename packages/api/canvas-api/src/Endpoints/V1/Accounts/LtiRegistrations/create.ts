import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

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
   * The name of the tool. If one isn't provided, it will be inferred from the
   * configuration's title.
   */
  name: string;
  /** A friendly nickname set by admins to override the tool name */
  admin_nickname: string;
  /** The vendor of the tool */
  vendor: string;
  /** A description of the tool. Cannot exceed 2048 bytes. */
  description: string;
  /**
   * [Required, Lti::ToolConfiguration | Lti::LegacyConfiguration] The LTI 1.3
   * configuration for the tool
   */
  configuration: string;
  /**
   * [Lti::Overlay] The overlay configuration for the tool. Overrides values
   * in the base configuration.
   */
  overlay: string;
  /**
   * The unique identifier for the tool, used for analytics. If not provided,
   * one will be generated.
   */
  unified_tool_id: string;
  /**
   * The desired state for this registration/account binding. "allow" is only
   * valid for Site Admin registrations. Defaults to "off".
   */
  workflow_state: string;
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
 * Create an LTI Registration
 *
 * Create a new LTI Registration, as well as an associated Tool Configuration,
 * Developer Key, and Registration Account binding. To install/create using
 * Dynamic Registration, please use the {file:file.registration.html Dynamic
 * Registration API}.
 *
 * Nickname: create_lti_registration
 */
export async function create(options: Options) {
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
