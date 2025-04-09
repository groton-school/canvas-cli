import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

type delete_lti_registrationPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_lti_registrationPathParameters;
};

/**
 * Delete an LTI Registration
 *
 * Remove the specified LTI registration
 *
 * Nickname: delete_lti_registration
 */
export async function delete_lti_registration({ pathParams }: Options) {
  return await client().fetchAs<LtiRegistration>(
    `/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
