import { client } from '../../../../../../Client.js';

export type mark_entry_as_unread_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

export type mark_entry_as_unread_groupsSearchParameters = {
  /**
   * A boolean value to set the entry's forced_read_state. No change is made
   * if this argument is not specified.
   */
  forced_read_state: boolean;
};

type Options = {
  pathParams: mark_entry_as_unread_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_entry_as_unread_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_entry_as_unread_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Mark entry as unread
 *
 * Mark a discussion entry as unread.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_entry_as_unread_groups
 */
export async function mark_entry_as_unread_groups(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
