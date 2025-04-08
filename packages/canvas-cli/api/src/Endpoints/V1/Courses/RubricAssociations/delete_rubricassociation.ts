import { client } from '../../../../Client.js';
import { RubricAssociation } from '../../../../Resources/Rubrics.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a RubricAssociation
 *
 * Delete the RubricAssociation with the given ID
 *
 * Nickname: delete_rubricassociation
 */
export async function delete_rubricassociation({ parameters }: Options) {
  return await client().fetchAs<RubricAssociation>(
    `/v1/courses/{course_id}/rubric_associations/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
