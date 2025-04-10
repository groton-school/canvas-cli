import { client } from '../../../../../../Client.js';

export type mark_entry_as_read_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

export type mark_entry_as_read_groupsFormParameters = {
  /**
   * A boolean value to set the entry's forced_read_state. No change is made
   * if this argument is not specified.
   */
  forced_read_state: boolean;
};

type Options = {
  pathParams: mark_entry_as_read_groupsPathParameters;
} & (
  | {
      params?: Partial<mark_entry_as_read_groupsFormParameters>;
      strict?: false;
    }
  | {
      params: mark_entry_as_read_groupsFormParameters;
      strict: true;
    }
);

/**
 * Mark entry as read
 *
 * Mark a discussion entry as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_entry_as_read_groups
 */
export async function mark_entry_as_read_groups({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
