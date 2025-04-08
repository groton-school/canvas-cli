import { client } from '../../../../Client.js';
import { Enrollment } from '../../../../Resources/Enrollments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Enrollment by ID
 *
 * Get an Enrollment object by Enrollment ID
 *
 * Nickname: enrollment_by_id
 */
export async function enrollment_by_id({ parameters }: Options) {
  return await client().fetchAs<Enrollment>(
    `/v1/accounts/{account_id}/enrollments/{id}`,
    { method: 'GET', params: parameters }
  );
}
