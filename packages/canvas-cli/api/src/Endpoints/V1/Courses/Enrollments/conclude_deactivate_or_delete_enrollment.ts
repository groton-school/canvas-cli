import { client } from '../../../../Client.js';
import { Enrollment } from '../../../../Resources/Enrollments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Conclude, deactivate, or delete an enrollment
 *
 * Conclude, deactivate, or delete an enrollment. If the +task+ argument isn't
 * given, the enrollment will be concluded.
 *
 * Nickname: conclude_deactivate_or_delete_enrollment
 */
export async function conclude_deactivate_or_delete_enrollment({
  parameters
}: Options) {
  return await client().fetchAs<Enrollment>(
    `/v1/courses/{course_id}/enrollments/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
