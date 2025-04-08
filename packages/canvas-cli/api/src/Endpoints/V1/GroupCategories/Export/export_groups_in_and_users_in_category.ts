import { client } from '../../../../Client.js';

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
}: Options) {
  return await client().fetchAs<void>(
    `/v1/group_categories/{group_category_id}/export`,
    { method: 'GET', params: parameters }
  );
}
