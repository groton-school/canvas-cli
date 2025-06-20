import { client } from '../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single temporary enrollment pairing
 *
 * Returns the temporary enrollment pairing with the given id.
 *
 * Nickname: get_single_temporary_enrollment_pairing
 */
export async function get(options: Options) {
  const response = await client().fetchAs<TemporaryEnrollmentPairing>(
    `/api/v1/accounts/{account_id}/temporary_enrollment_pairings/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
