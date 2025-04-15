import { client } from '../../../../Client.js';

export type delete_topic_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: delete_topic_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
