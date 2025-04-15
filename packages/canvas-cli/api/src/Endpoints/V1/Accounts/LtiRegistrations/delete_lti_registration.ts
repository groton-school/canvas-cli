import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type delete_lti_registrationPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_lti_registrationPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete an LTI Registration
 *
 * Remove the specified LTI registration
 *
 * Nickname: delete_lti_registration
 */
export async function delete_lti_registration(options: Options) {
  return await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
