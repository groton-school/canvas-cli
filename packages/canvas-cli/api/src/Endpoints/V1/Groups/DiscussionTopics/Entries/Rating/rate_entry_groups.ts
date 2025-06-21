import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type rate_entry_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
  /** ID */
  entry_id: string;
};

export type rate_entry_groupsSearchParameters = Masquerade;

export type rate_entry_groupsFormParameters = Masquerade & {
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
      searchParams?: Partial<rate_entry_groupsSearchParameters>;
      params?: Partial<rate_entry_groupsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: rate_entry_groupsSearchParameters;
      params: rate_entry_groupsFormParameters;
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
export async function rate_entry_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
