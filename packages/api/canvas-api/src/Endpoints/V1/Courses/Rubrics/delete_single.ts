import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Rubric } from '../../../../Resources/Rubrics.js';

export type delete_singlePathParameters = {
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

export type delete_singleSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_singlePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_singlePathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_singleSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_singleSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_singleSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: delete_singleSearchParameters;
        strict: true;
      }
  );

/**
 * Delete a single
 *
 * Deletes a Rubric and removes all RubricAssociations.
 *
 * Nickname: delete_single
 */
export async function delete_single(options: Options) {
  const response = await client().fetchAs<Rubric>(
    `/api/v1/courses/{course_id}/rubrics/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
