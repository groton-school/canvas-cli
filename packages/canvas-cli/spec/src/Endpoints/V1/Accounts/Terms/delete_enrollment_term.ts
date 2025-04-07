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
export async function delete_enrollment_term({
  parameters
}: Options): Promise<EnrollmentTerm> {
  return await (
    await fetch(`/v1/accounts/{account_id}/terms/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
