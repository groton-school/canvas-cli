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
 * Nickname: list_external_feeds_courses
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/external_feeds`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
