import { ListLtiRegistrationsResponse } from '../../../../Resources/LtiRegistrations.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List LTI Registrations in an account
 *
 * Returns all LTI registrations in the specified account. Includes
 * registrations created in this account, those set to 'allow' from a parent
 * root account (like Site Admin) and 'on' for this account, and those enabled
 * 'on' at the parent root account level.
 *
 * Nickname: list_lti_registrations_in_account
 */
export async function list({
  parameters
}: Options): Promise<ListLtiRegistrationsResponse> {
  return await (
    await fetch(`/v1/accounts/{account_id}/lti_registrations`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
