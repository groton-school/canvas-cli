import { client } from '../../../../Client.js';
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/temporary_enrollment_pairings`,
    { method: 'GET', params: parameters }
  );
}
