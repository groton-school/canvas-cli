type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List live assessment results
 *
 * Returns a paginated list of live assessment results
 *
 * Nickname: list_live_assessment_results
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
