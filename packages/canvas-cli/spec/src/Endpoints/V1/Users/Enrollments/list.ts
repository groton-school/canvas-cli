import { Enrollment } from '../../../../Resources/Enrollments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List enrollments
 *
 * Depending on the URL given, return a paginated list of either (1) all of the
 * enrollments in a course, (2) all of the enrollments in a section or (3) all
 * of a user's enrollments. This includes student, teacher, TA, and observer
 * enrollments.
 *
 * If a user has multiple enrollments in a context (e.g. as a teacher and a
 * student or in multiple course sections), each enrollment will be listed
 * separately.
 *
 * Note: Currently, only a root level admin user can return other users'
 * enrollments. A user can, however, return his/her own enrollments.
 *
 * Enrollments scoped to a course context will include inactive states by
 * default if the caller has account admin authorization and the state[]
 * parameter is omitted.
 *
 * Nickname: list_enrollments_users
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/{user_id}/enrollments`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
