type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Create live assessment results
 *
 * Creates live assessment results and adds them to a live assessment
 *
 * Nickname: create_live_assessment_results
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
