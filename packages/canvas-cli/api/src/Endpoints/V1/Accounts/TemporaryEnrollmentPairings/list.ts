import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { TemporaryEnrollmentPairing } from '../../../../Resources/TemporaryEnrollmentPairings.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List temporary enrollment pairings
 *
 * Returns the list of temporary enrollment pairings for a root account.
 *
 * Nickname: list_temporary_enrollment_pairings
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<TemporaryEnrollmentPairing[]>(
    `/v1/accounts/{account_id}/temporary_enrollment_pairings`,
    {
      method: 'GET',
      pathParams
    }
  );
}
