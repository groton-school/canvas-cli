import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type delete_lti_registrationPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type delete_lti_registrationSearchParameters = Masquerade;

type Options = {
  pathParams: delete_lti_registrationPathParameters;
} & (
  | {
      searchParams?: Partial<delete_lti_registrationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_lti_registrationSearchParameters;
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
  const response = await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registrations/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
