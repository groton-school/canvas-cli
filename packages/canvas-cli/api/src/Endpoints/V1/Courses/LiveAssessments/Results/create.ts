import { client } from '../../../../../Client.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assessment_id: string;
};

type Options = {
  pathParams: createPathParameters;
};

/**
 * Create live assessment results
 *
 * Creates live assessment results and adds them to a live assessment
 *
 * Nickname: create_live_assessment_results
 */
export async function create({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/live_assessments/{assessment_id}/results`,
    {
      method: 'POST',
      pathParams
    }
  );
}
