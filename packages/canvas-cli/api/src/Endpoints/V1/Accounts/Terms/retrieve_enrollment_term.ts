import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type retrieve_enrollment_termPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type retrieve_enrollment_termSearchParameters = Masquerade;

type Options = {
  pathParams: retrieve_enrollment_termPathParameters;
} & (
  | {
      searchParams?: Partial<retrieve_enrollment_termSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: retrieve_enrollment_termSearchParameters;
      strict: true;
    }
);

/**
 * Retrieve enrollment term
 *
 * Retrieves the details for an enrollment term in the account. Includes
 * overrides by default.
 *
 * Nickname: retrieve_enrollment_term
 */
export async function retrieve_enrollment_term(options: Options) {
  const response = await client().fetchAs<EnrollmentTerm>(
    `/api/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
