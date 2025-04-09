import { client } from '../../../../Client.js';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type delete_external_feed_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  external_feed_id: string;
};

type Options = {
  pathParams: delete_external_feed_groupsPathParameters;
};

/**
 * Delete an external feed
 *
 * Deletes the external feed.
 *
 * Nickname: delete_external_feed_groups
 */
export async function delete_external_feed_groups({ pathParams }: Options) {
  return await client().fetchAs<ExternalFeed>(
    `/v1/groups/{group_id}/external_feeds/{external_feed_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
