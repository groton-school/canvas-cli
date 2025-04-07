type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Clear unread status for all submissions.
 *
 * Site-admin-only endpoint.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: clear_unread_status_for_all_submissions_courses
 */
export async function clear_unread_status_for_all_submissions_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/submissions/{user_id}/clear_unread`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
