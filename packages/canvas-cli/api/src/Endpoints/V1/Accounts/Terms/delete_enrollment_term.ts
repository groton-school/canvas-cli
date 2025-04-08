import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete enrollment term
 *
 * Delete the specified enrollment term.
 *
 * Nickname: delete_enrollment_term
 */
export async function delete_enrollment_term({ parameters }: Options) {
  return await client().fetchAs<EnrollmentTerm>(
    `/v1/accounts/{account_id}/terms/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
