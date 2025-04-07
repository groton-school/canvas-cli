type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a grading period set
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_set
 */
export async function delete_grading_period_set({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/grading_period_sets/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
