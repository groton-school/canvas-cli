import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The name of the tool */
  name: string;
  /** The admin-configured friendly display name for the registration */
  admin_nickname: string;
  /** A description of the tool. Cannot exceed 2048 bytes. */
  description: string;
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
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

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
export async function update(options: Options) {
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
