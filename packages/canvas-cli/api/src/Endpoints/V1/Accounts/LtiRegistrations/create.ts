import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createFormParameters = {
  /** The name of the tool */
  name: string;
  /** A friendly nickname set by admins to override the tool name */
  admin_nickname: string;
  /** The vendor of the tool */
  vendor: string;
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
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create an LTI Registration
 *
 * Create a new LTI Registration, as well as an associated Tool Configuration,
 * Developer Key, and Registration Account binding. To install/create using
 * Dynamic Registration, please use the <a
 * href="/doc/api/registration.html">Dynamic Registration API.</a>
 *
 * Nickname: create_lti_registration
 */
export async function create(options: Options) {
  return await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations`,
    {
      method: 'POST',
      ...options
    }
  );
}
