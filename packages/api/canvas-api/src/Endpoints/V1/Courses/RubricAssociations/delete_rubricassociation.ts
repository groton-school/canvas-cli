import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { RubricAssociation } from '../../../../Resources/Rubrics.js';

export type delete_rubricassociationPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_rubricassociationSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_rubricassociationSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_rubricassociationSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a RubricAssociation
 *
 * Delete the RubricAssociation with the given ID
 *
 * nickname: delete_rubricassociation
 *
 *
 *
 *
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
