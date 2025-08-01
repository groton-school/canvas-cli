import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../../Resources/TemporaryEnrollmentPairings.js';

export type new_temporaryenrollmentpairingPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type new_temporaryenrollmentpairingSearchParameters = Masquerade;

type Options = {
  pathParams: new_temporaryenrollmentpairingPathParameters;
} & (
  | {
      searchParams?: Partial<new_temporaryenrollmentpairingSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: new_temporaryenrollmentpairingSearchParameters;
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
  const response = await client().fetchAs<TemporaryEnrollmentPairing>(
    `/api/v1/accounts/{account_id}/temporary_enrollment_pairings/new`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
