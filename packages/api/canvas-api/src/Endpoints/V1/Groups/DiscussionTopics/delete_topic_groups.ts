import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type delete_topic_groupsPathParameters = {
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
};

export type delete_topic_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: delete_topic_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_topic_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_topic_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Delete a topic
 *
 * Deletes the discussion topic. This will also delete the assignment, if it's
 * an assignment discussion.
 *
 * Nickname: delete_topic_groups
 */
export async function delete_topic_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
