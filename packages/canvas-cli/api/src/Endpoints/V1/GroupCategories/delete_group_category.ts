import { client } from '../../../Client.js';

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
export async function delete_group_category({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/group_categories/{group_category_id}`,
    { method: 'DELETE', params: parameters }
  );
}
