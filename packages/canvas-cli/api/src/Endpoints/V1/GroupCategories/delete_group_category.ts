import { client } from '../../../Client.js';

type delete_group_categoryPathParameters = {
  /** ID */
  group_category_id: string;
};

type Options = {
  pathParams: delete_group_categoryPathParameters;
};

/**
 * Delete a Group Category
 *
 * Deletes a group category and all groups under it. Protected group categories
 * can not be deleted, i.e. "communities" and "student_organized".
 *
 * Nickname: delete_group_category
 */
export async function delete_group_category({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/group_categories/{group_category_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
