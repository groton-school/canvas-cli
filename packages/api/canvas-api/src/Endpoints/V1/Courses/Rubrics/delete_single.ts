import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
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

type Options = {
  pathParams: delete_singlePathParameters;
} & (
  | {
      searchParams?: Partial<delete_singleSearchParameters>;
      strict?: false;
    }
  | {
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
