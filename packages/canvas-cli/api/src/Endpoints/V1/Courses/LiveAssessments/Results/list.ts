import { client } from '../../../../../Client.js';

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
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    { method: 'GET', params: parameters }
  );
}
