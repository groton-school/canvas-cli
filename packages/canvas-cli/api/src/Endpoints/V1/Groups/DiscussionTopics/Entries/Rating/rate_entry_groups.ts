import { client } from '../../../../../../Client.js';

export type rate_entry_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

export type rate_entry_groupsFormParameters = {
  /**
   * A rating to set on this entry. Only 0 and 1 are accepted.
   *
   * Format: 'int64'
   */
  rating: number;
};

type Options = {
  pathParams: rate_entry_groupsPathParameters;
} & (
  | {
      params?: Partial<rate_entry_groupsFormParameters>;
      strict?: false;
    }
  | {
      params?: rate_entry_groupsFormParameters;
      strict: true;
    }
);

/**
 * Rate entry
 *
 * Rate a discussion entry.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: rate_entry_groups
 */
export async function rate_entry_groups({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
