import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { RubricAssessment } from '../../../../../Resources/Rubrics.js';

export type delete_single_rubric_assessmentPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  rubric_association_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_single_rubric_assessmentSearchParameters = Masquerade;

type Options = {
  pathParams: delete_single_rubric_assessmentPathParameters;
} & (
  | {
      searchParams?: Partial<delete_single_rubric_assessmentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_single_rubric_assessmentSearchParameters;
      strict: true;
    }
);

/**
 * Delete a single rubric assessment
 *
 * Deletes a rubric assessment
 *
 * Nickname: delete_single_rubric_assessment
 */
export async function delete_single_rubric_assessment(options: Options) {
  const response = await client().fetchAs<RubricAssessment>(
    `/api/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
