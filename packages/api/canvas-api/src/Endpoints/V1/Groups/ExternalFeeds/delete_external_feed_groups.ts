import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type delete_external_feed_groupsPathParameters = {
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
  external_feed_id: string | number;
};

export type delete_external_feed_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: delete_external_feed_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_external_feed_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_external_feed_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Delete an external feed
 *
 * Deletes the external feed.
 *
 * Nickname: delete_external_feed_groups
 */
export async function delete_external_feed_groups(options: Options) {
  const response = await client().fetchAs<ExternalFeed>(
    `/api/v1/groups/{group_id}/external_feeds/{external_feed_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
