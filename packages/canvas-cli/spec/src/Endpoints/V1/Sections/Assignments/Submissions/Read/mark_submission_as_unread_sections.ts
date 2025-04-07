type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Mark submission as unread
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_submission_as_unread_sections
 */
export async function mark_submission_as_unread_sections({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
