import { client } from '../../../../Client.js';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type createPathParameters = {
  /** ID */
  group_id: string;
};

export type createFormParameters = {
  /** The url to the external rss or atom feed */
  url: string;
  /**
   * If given, only feed entries that contain this string in their title will
   * be imported
   */
  header_match: boolean;
  /** Defaults to "full" */
  verbosity: string;
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create an external feed
 *
 * Create a new external feed for the course or group.
 *
 * Nickname: create_external_feed_groups
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<ExternalFeed>(
    `/v1/groups/{group_id}/external_feeds`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
