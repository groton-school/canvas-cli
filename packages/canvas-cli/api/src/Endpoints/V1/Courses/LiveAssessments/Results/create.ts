import { client } from '../../../../../Client.js';

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
export async function create({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    { method: 'POST', params: parameters }
  );
}
