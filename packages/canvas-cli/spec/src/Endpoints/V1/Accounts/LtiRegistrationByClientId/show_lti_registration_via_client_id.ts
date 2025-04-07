import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show an LTI Registration (via the client_id)
 *
 * Returns details about the specified LTI registration, including the
 * configuration and account binding.
 *
 * Nickname: show_lti_registration_via_client_id
 */
export async function show_lti_registration_via_client_id({
  parameters
}: Options): Promise<LtiRegistration> {
  return await (
    await fetch(
      `/v1/accounts/{account_id}/lti_registration_by_client_id/{client_id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
