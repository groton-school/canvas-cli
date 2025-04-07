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
export async function re_activate_enrollment({
  parameters
}: Options): Promise<Enrollment> {
  return await (
    await fetch(`/v1/courses/{course_id}/enrollments/{id}/reactivate`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
