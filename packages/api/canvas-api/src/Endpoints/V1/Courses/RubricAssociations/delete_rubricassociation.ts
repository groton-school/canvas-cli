import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: delete_rubricassociationPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_rubricassociationPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_rubricassociationSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_rubricassociationSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_rubricassociationSearchParameters>;
        /** @deprecated Use {Options.query} */
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
