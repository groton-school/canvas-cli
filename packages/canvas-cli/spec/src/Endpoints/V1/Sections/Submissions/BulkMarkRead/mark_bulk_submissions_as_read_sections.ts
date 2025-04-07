type Parameters = {
  /** No description */
  submissionIds: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Mark bulk submissions as read
 *
 * Accepts a string array of submission ids. Loops through and marks each
 * submission as read
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_bulk_submissions_as_read_sections
 */
export async function mark_bulk_submissions_as_read_sections({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/sections/{section_id}/submissions/bulk_mark_read`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
