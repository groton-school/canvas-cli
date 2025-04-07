type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single submission
 *
 * Get a single submission, based on user id.
 *
 * Nickname: get_single_submission_sections
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
