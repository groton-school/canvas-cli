type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Accept Course Invitation
 *
 * Accepts a pending course invitation for the current user
 *
 * Nickname: accept_course_invitation
 */
export async function accept_course_invitation({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/enrollments/{id}/accept`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
