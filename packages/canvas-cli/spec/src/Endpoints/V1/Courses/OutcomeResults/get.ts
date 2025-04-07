type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get outcome results
 *
 * Gets the outcome results for users and outcomes in the specified context.
 *
 * Used in sLMGB
 *
 * Nickname: get_outcome_results
 */
export async function get({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/outcome_results`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
