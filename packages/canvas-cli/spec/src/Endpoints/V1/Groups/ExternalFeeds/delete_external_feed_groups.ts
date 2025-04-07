import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an external feed
 *
 * Deletes the external feed.
 *
 * Nickname: delete_external_feed_groups
 */
export async function delete_external_feed_groups({
  parameters
}: Options): Promise<ExternalFeed> {
  return await (
    await fetch(`/v1/groups/{group_id}/external_feeds/{external_feed_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
