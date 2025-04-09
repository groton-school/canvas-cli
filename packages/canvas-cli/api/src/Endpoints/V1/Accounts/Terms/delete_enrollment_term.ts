import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

type delete_enrollment_termPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_enrollment_termPathParameters;
};

/**
 * Delete enrollment term
 *
 * Delete the specified enrollment term.
 *
 * Nickname: delete_enrollment_term
 */
export async function delete_enrollment_term({ pathParams }: Options) {
  return await client().fetchAs<EnrollmentTerm>(
    `/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
