import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

export type delete_groupPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type delete_groupSearchParameters = Masquerade;

type Options = {
  pathParams: delete_groupPathParameters;
} & (
  | {
      searchParams?: Partial<delete_groupSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_groupSearchParameters;
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
  const response = await client().fetchAs<Group>(`/api/v1/groups/{group_id}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}
