import { client } from '../../../../Client.js';
import { Enrollment } from '../../../../Resources/Enrollments.js';

export type enrollment_by_idPathParameters = {
  /** ID */
  account_id: string;
  /**
   * The ID of the enrollment object
   *
   * Format: 'int64'
   */
  id: number;
};

type Options = {
  pathParams: enrollment_by_idPathParameters;
};

/**
 * Enrollment by ID
 *
 * Get an Enrollment object by Enrollment ID
 *
 * Nickname: enrollment_by_id
 */
export async function enrollment_by_id({ pathParams }: Options) {
  return await client().fetchAs<Enrollment>(
    `/v1/accounts/{account_id}/enrollments/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
