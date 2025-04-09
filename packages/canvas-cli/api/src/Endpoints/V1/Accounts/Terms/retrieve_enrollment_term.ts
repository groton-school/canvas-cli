import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

type retrieve_enrollment_termPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: retrieve_enrollment_termPathParameters;
};

/**
 * Retrieve enrollment term
 *
 * Retrieves the details for an enrollment term in the account. Includes
 * overrides by default.
 *
 * Nickname: retrieve_enrollment_term
 */
export async function retrieve_enrollment_term({ pathParams }: Options) {
  return await client().fetchAs<EnrollmentTerm>(
    `/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
