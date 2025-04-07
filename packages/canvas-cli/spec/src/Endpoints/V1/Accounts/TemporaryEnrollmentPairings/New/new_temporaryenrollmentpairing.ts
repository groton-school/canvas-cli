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
export async function new_temporaryenrollmentpairing({
  parameters
}: Options): Promise<TemporaryEnrollmentPairing> {
  return await (
    await fetch(`/v1/accounts/{account_id}/temporary_enrollment_pairings/new`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
