import { client } from '../../../../Client.js';
import { LtiRegistration } from '../../../../Resources/LtiRegistrations.js';

export type show_lti_registration_via_client_idPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  client_id: string;
};

type Options = {
  pathParams: show_lti_registration_via_client_idPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show an LTI Registration (via the client_id)
 *
 * Returns details about the specified LTI registration, including the
 * configuration and account binding.
 *
 * Nickname: show_lti_registration_via_client_id
 */
export async function show_lti_registration_via_client_id(options: Options) {
  return await client().fetchAs<LtiRegistration>(
    `/api/v1/accounts/{account_id}/lti_registration_by_client_id/{client_id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
