import { client } from '../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single temporary enrollment pairing
 *
 * Returns the temporary enrollment pairing with the given id.
 *
 * Nickname: get_single_temporary_enrollment_pairing
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<TemporaryEnrollmentPairing>(
    `/v1/accounts/{account_id}/temporary_enrollment_pairings/{id}`,
    { method: 'GET', params: parameters }
  );
}
