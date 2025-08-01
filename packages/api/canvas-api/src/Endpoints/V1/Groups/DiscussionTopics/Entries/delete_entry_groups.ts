import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type delete_entry_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_entry_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: delete_entry_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_entry_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_entry_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Delete an entry
 *
 * Delete a discussion entry.
 *
 * The entry must have been created by the current user, or the current user
 * must have admin rights to the discussion. If the delete is not allowed, a 401
 * will be returned.
 *
 * The discussion will be marked deleted, and the user_id and message will be
 * cleared out.
 *
 * Nickname: delete_entry_groups
 */
export async function delete_entry_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
