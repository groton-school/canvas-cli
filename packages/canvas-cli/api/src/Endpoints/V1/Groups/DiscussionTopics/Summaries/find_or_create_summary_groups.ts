import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type find_or_create_summary_groupsPathParameters = {
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

export type find_or_create_summary_groupsSearchParameters = Masquerade;

export type find_or_create_summary_groupsFormParameters = Masquerade & {
  /** Areas or topics for the summary to focus on. */
  userInput: string;
};

type Options = {
  pathParams: find_or_create_summary_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<find_or_create_summary_groupsSearchParameters>;
      params?: Partial<find_or_create_summary_groupsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: find_or_create_summary_groupsSearchParameters;
      params: find_or_create_summary_groupsFormParameters;
      strict: true;
    }
);

/**
 * Find or Create Summary
 *
 * Generates a summary for a discussion topic. Returns the summary text and
 * usage information.
 *
 * Nickname: find_or_create_summary_groups
 */
export async function find_or_create_summary_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/summaries`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
