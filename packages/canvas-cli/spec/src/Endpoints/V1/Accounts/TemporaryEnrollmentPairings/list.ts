import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List temporary enrollment pairings
 *
 * Returns the list of temporary enrollment pairings for a root account.
 *
 * Nickname: list_temporary_enrollment_pairings
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/temporary_enrollment_pairings`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
