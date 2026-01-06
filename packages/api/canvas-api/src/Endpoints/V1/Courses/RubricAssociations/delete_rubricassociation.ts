import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { RubricAssociation } from '../../../../Resources/Rubrics.js';

export type delete_rubricassociationPathParameters = {
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
  id: string | number;
};

export type delete_rubricassociationSearchParameters = Masquerade;

type Options = {
  pathParams: delete_rubricassociationPathParameters;
} & (
  | {
      searchParams?: Partial<delete_rubricassociationSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_rubricassociationSearchParameters;
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
  const response = await client().fetchAs<RubricAssociation>(
    `/api/v1/courses/{course_id}/rubric_associations/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
