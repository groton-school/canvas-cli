import { client } from '../../../../Client.js';
import { RubricAssociation } from '../../../../Resources/Rubrics.js';

export type delete_rubricassociationPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_rubricassociationPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a RubricAssociation
 *
 * Delete the RubricAssociation with the given ID
 *
 * Nickname: delete_rubricassociation
 */
export async function delete_rubricassociation(options: Options) {
  return await client().fetchAs<RubricAssociation>(
    `/api/v1/courses/{course_id}/rubric_associations/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
