import { client } from '../../../../../Client.js';
import { RubricAssessment } from '../../../../../Resources/Rubrics.js';

export type delete_single_rubric_assessmentPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  rubric_association_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_single_rubric_assessmentPathParameters;
};

/**
 * Delete a single rubric assessment
 *
 * Deletes a rubric assessment
 *
 * Nickname: delete_single_rubric_assessment
 */
export async function delete_single_rubric_assessment({ pathParams }: Options) {
  return await client().fetchAs<RubricAssessment>(
    `/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
