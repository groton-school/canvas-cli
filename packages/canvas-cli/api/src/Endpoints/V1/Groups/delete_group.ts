import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a group
 *
 * Deletes a group and removes all members.
 *
 * Nickname: delete_group
 */
export async function delete_group({ parameters }: Options) {
  return await client().fetchAs<Group>(`/v1/groups/{group_id}`, {
    method: 'DELETE',
    params: parameters
  });
}
