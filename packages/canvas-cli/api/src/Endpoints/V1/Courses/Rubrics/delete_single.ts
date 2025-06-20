import { client } from '../../../../Client.js';
import { Rubric } from '../../../../Resources/Rubrics.js';

export type delete_singlePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_singlePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
