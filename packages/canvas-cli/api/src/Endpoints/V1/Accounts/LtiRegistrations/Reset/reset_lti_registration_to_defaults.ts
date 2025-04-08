import { client } from '../../../../../Client.js';
import { LtiRegistration } from '../../../../../Resources/LtiRegistrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Reset an LTI Registration to Defaults
 *
 * Reset the specified LTI registration to its default settings in this context.
 * This removes all customizations that were present in the overlay associated
 * with this context.
 *
 * Nickname: reset_lti_registration_to_defaults
 */
export async function reset_lti_registration_to_defaults({
  parameters
}: Options) {
  return await client().fetchAs<LtiRegistration>(
    `/v1/accounts/{account_id}/lti_registrations/{id}/reset`,
    { method: 'PUT', params: parameters }
  );
}
