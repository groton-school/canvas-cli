import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type delete_grading_period_setPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_grading_period_setSearchParameters = Masquerade;

type Options = {
  pathParams: delete_grading_period_setPathParameters;
} & (
  | {
      searchParams?: Partial<delete_grading_period_setSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_grading_period_setSearchParameters;
      strict: true;
    }
);

/**
 * Delete a grading period set
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_set
 */
export async function delete_grading_period_set(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/grading_period_sets/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
