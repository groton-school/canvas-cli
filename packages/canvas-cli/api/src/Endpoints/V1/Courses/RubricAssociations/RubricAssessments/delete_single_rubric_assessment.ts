import { client } from '../../../../../Client.js';
import { RubricAssessment } from '../../../../../Resources/Rubrics.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a single rubric assessment
 *
 * Deletes a rubric assessment
 *
 * Nickname: delete_single_rubric_assessment
 */
export async function delete_single_rubric_assessment({ parameters }: Options) {
  return await client().fetchAs<RubricAssessment>(
    `/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
