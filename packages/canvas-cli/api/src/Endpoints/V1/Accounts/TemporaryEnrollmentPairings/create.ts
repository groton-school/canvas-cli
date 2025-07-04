import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create Temporary Enrollment Pairing
 *
 * Create a Temporary Enrollment Pairing.
 *
 * Nickname: create_temporary_enrollment_pairing
 */
export async function create(options: Options) {
  const response = await client().fetchAs<TemporaryEnrollmentPairing>(
    `/api/v1/accounts/{account_id}/temporary_enrollment_pairings`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
