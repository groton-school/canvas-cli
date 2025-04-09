import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

type updatePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type updateFormParameters = {
  /** The name of the tool */
  name: string;
  /** The admin-configured friendly display name for the registration */
  admin_nickname: string;
  /**
   * [Lti::ToolConfiguration | Lti::LegacyConfiguration] The LTI 1.3
   * configuration for the tool. Note that updating the base tool
   * configuration of a registration associated with a Dynamic Registration is
   * not allowed.
   */
  configuration: string;
  /**
   * [Lti::Overlay] The overlay configuration for the tool. Overrides values
   * in the base configuration. Note that updating the overlay of a
   * registration associated with a Dynamic Registration IS allowed.
   */
  overlay: string;
  /**
   * The desired state for this registration/account binding. "allow" is only
   * valid for Site Admin registrations.
   */
  workflow_state: string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update an LTI Registration
 *
 * Update the specified LTI registration with the provided parameters. Note that
 * updating the base tool configuration of a registration that is associated
 * with a Dynamic Registration will return a 422. All other fields can be
 * updated freely.
 *
 * Nickname: update_lti_registration
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<LtiRegistration>(
    `/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
