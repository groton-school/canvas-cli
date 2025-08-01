import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { EnrollmentTerm } from '../../../../Resources/EnrollmentTerms.js';

export type delete_enrollment_termPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_enrollment_termSearchParameters = Masquerade;

type Options = {
  pathParams: delete_enrollment_termPathParameters;
} & (
  | {
      searchParams?: Partial<delete_enrollment_termSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_enrollment_termSearchParameters;
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
