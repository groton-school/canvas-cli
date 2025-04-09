import { client } from '../../../../Client.js';

export type delete_grading_period_setPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_grading_period_setPathParameters;
};

/**
 * Delete a grading period set
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_set
 */
export async function delete_grading_period_set({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/grading_period_sets/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
