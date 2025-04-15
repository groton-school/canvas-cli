import { client } from '../../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../../Resources/TemporaryEnrollmentPairings.js';

export type new_temporaryenrollmentpairingPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: new_temporaryenrollmentpairingPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * New TemporaryEnrollmentPairing
 *
 * Initialize an unsaved Temporary Enrollment Pairing.
 *
 * Nickname: new_temporaryenrollmentpairing
 */
export async function new_temporaryenrollmentpairing(options: Options) {
  return await client().fetchAs<TemporaryEnrollmentPairing>(
    `/api/v1/accounts/{account_id}/temporary_enrollment_pairings/new`,
    {
      method: 'GET',
      ...options
    }
  );
}
