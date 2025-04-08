import { client } from '../../../../Client.js';
import { Rubric } from '../../../../Resources/Rubrics.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a single rubric
 *
 * Deletes a Rubric and removes all RubricAssociations.
 *
 * Nickname: delete_single_rubric
 */
export async function delete_single_rubric({ parameters }: Options) {
  return await client().fetchAs<Rubric>(
    `/v1/courses/{course_id}/rubrics/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
