import { client } from '../../../../../Client.js';
import { Enrollment } from '../../../../../Resources/Enrollments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Re-activate an enrollment
 *
 * Activates an inactive enrollment
 *
 * Nickname: re_activate_enrollment
 */
export async function re_activate_enrollment({ parameters }: Options) {
  return await client().fetchAs<Enrollment>(
    `/v1/courses/{course_id}/enrollments/{id}/reactivate`,
    { method: 'PUT', params: parameters }
  );
}
