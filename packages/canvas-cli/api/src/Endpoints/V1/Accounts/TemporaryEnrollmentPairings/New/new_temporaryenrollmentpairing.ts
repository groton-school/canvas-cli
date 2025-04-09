import { client } from '../../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../../Resources/TemporaryEnrollmentPairings.js';

type new_temporaryenrollmentpairingPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: new_temporaryenrollmentpairingPathParameters;
};

/**
 * New TemporaryEnrollmentPairing
 *
 * Initialize an unsaved Temporary Enrollment Pairing.
 *
 * Nickname: new_temporaryenrollmentpairing
 */
export async function new_temporaryenrollmentpairing({ pathParams }: Options) {
  return await client().fetchAs<TemporaryEnrollmentPairing>(
    `/v1/accounts/{account_id}/temporary_enrollment_pairings/new`,
    {
      method: 'GET',
      pathParams
    }
  );
}
