import { EnrollmentTermsList } from '../../../../Resources/EnrollmentTerms.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List enrollment terms
 *
 * An object with a paginated list of all of the terms in the account.
 *
 * Nickname: list_enrollment_terms
 */
export async function list({
  parameters
}: Options): Promise<EnrollmentTermsList> {
  return await (
    await fetch(`/v1/accounts/{account_id}/terms`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
