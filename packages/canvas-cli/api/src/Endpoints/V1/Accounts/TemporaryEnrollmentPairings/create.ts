import { client } from '../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

type Parameters = {
  /** The workflow state of the temporary enrollment pairing. */
  workflow_state: string;
  /**
   * The ending enrollment state to be given to each associated enrollment
   * when the enrollment period has been reached. Defaults to "deleted" if no
   * value is given. Accepted values are "deleted", "completed", and
   * "inactive".
   */
  ending_enrollment_state: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create Temporary Enrollment Pairing
 *
 * Create a Temporary Enrollment Pairing.
 *
 * Nickname: create_temporary_enrollment_pairing
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<TemporaryEnrollmentPairing>(
    `/v1/accounts/{account_id}/temporary_enrollment_pairings`,
    { method: 'POST', params: parameters }
  );
}
