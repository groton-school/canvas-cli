import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an LTI Registration
 *
 * Return details about the specified LTI registration, including the
 * configuration and account binding.
 *
 * Nickname: show_lti_registration
 */
export async function show_lti_registration({
  parameters
}: Options): Promise<LtiRegistration> {
  return await (
    await fetch(`/v1/accounts/{account_id}/lti_registrations/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
