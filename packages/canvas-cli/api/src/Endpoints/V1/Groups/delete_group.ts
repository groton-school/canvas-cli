import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

export type delete_groupPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: delete_groupPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a group
 *
 * Deletes a group and removes all members.
 *
 * Nickname: delete_group
 */
export async function delete_group(options: Options) {
  return await client().fetchAs<Group>(`/api/v1/groups/{group_id}`, {
    method: 'DELETE',
    ...options
  });
}
