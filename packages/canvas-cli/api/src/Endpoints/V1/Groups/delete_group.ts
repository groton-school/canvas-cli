import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

type delete_groupPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: delete_groupPathParameters;
};

/**
 * Delete a group
 *
 * Deletes a group and removes all members.
 *
 * Nickname: delete_group
 */
export async function delete_group({ pathParams }: Options) {
  return await client().fetchAs<Group>(`/v1/groups/{group_id}`, {
    method: 'DELETE',
    pathParams
  });
}
