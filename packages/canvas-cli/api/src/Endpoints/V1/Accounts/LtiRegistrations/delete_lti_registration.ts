import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an LTI Registration
 *
 * Remove the specified LTI registration
 *
 * Nickname: delete_lti_registration
 */
export async function delete_lti_registration({ parameters }: Options) {
  return await client().fetchAs<LtiRegistration>(
    `/v1/accounts/{account_id}/lti_registrations/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
