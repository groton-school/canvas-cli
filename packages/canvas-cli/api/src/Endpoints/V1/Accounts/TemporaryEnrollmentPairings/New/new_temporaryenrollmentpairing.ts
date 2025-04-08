import { client } from '../../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../../Resources/TemporaryEnrollmentPairings.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * New TemporaryEnrollmentPairing
 *
 * Initialize an unsaved Temporary Enrollment Pairing.
 *
 * Nickname: new_temporaryenrollmentpairing
 */
export async function new_temporaryenrollmentpairing({ parameters }: Options) {
  return await client().fetchAs<TemporaryEnrollmentPairing>(
    `/v1/accounts/{account_id}/temporary_enrollment_pairings/new`,
    { method: 'GET', params: parameters }
  );
}
