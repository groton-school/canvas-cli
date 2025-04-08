import { client } from '../../../../Client.js';
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
 * Nickname: delete_external_feed_courses
 */
export async function delete_external_feed_courses({ parameters }: Options) {
  return await client().fetchAs<ExternalFeed>(
    `/v1/courses/{course_id}/external_feeds/{external_feed_id}`,
    { method: 'DELETE', params: parameters }
  );
}
