import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type delete_enrollment_termPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_enrollment_termPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete enrollment term
 *
 * Delete the specified enrollment term.
 *
 * Nickname: delete_enrollment_term
 */
export async function delete_enrollment_term(options: Options) {
  const response = await client().fetchAs<EnrollmentTerm>(
    `/api/v1/accounts/{account_id}/terms/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
