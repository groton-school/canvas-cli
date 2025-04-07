import { GradingStandard } from '../../../../Resources/GradingStandards.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single grading standard in a context.
 *
 * Returns a grading standard for the given context that is visible to the user.
 *
 * Nickname: get_single_grading_standard_in_context_courses
 */
export async function get({ parameters }: Options): Promise<GradingStandard> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/grading_standards/{grading_standard_id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
