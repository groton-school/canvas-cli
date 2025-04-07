type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Export groups in and users in category
 *
 * Returns a csv file of users in format ready to import.
 *
 * Nickname: export_groups_in_and_users_in_category
 */
export async function export_groups_in_and_users_in_category({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/group_categories/{group_category_id}/export`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
