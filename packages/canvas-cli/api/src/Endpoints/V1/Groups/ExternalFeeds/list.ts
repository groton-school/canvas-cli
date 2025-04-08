import { client } from '../../../../Client.js';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List external feeds
 *
 * Returns the paginated list of External Feeds this course or group.
 *
 * Nickname: list_external_feeds_groups
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/groups/{group_id}/external_feeds`,
    { method: 'GET', params: parameters }
  );
}
