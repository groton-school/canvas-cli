import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

type Parameters = {
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
  parameters: Parameters;
};

/**
 * Create an external feed
 *
 * Create a new external feed for the course or group.
 *
 * Nickname: create_external_feed_courses
 */
export async function create({ parameters }: Options): Promise<ExternalFeed> {
  return await (
    await fetch(`/v1/courses/{course_id}/external_feeds`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
