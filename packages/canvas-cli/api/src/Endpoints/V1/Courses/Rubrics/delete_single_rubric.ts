import { client } from '../../../../Client.js';
import { Rubric } from '../../../../Resources/Rubrics.js';

export type delete_single_rubricPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_single_rubricPathParameters;
};

/**
 * Delete a single rubric
 *
 * Deletes a Rubric and removes all RubricAssociations.
 *
 * Nickname: delete_single_rubric
 */
export async function delete_single_rubric({ pathParams }: Options) {
  return await client().fetchAs<Rubric>(
    `/v1/courses/{course_id}/rubrics/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
