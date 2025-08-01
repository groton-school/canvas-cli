import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type post_entry_groupsPathParameters = {
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

export type post_entry_groupsSearchParameters = Masquerade;

export type post_entry_groupsFormParameters = Masquerade & {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  pathParams: post_entry_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<post_entry_groupsSearchParameters>;
      params?: Partial<post_entry_groupsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: post_entry_groupsSearchParameters;
      params: post_entry_groupsFormParameters;
      strict: true;
    }
);

/**
 * Post an entry
 *
 * Create a new entry in a discussion topic. Returns a json representation of
 * the created entry (see documentation for 'entries' method) on success.
 *
 * Nickname: post_entry_groups
 */
export async function post_entry_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/entries`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
