type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a Group Category
 *
 * Deletes a group category and all groups under it. Protected group categories
 * can not be deleted, i.e. "communities" and "student_organized".
 *
 * Nickname: delete_group_category
 */
export async function delete_group_category({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/group_categories/{group_category_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
