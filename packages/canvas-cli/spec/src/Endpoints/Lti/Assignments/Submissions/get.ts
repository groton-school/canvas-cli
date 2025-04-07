type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single submission
 *
 * Get a single submission, based on submission id.
 *
 * Nickname: get_single_submission
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/lti/assignments/{assignment_id}/submissions/{submission_id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
