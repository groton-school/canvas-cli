import { client } from '../../../../Client.js';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

type delete_external_feed_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  external_feed_id: string;
};

type Options = {
  pathParams: delete_external_feed_coursesPathParameters;
};

/**
 * Delete an external feed
 *
 * Deletes the external feed.
 *
 * Nickname: delete_external_feed_courses
 */
export async function delete_external_feed_courses({ pathParams }: Options) {
  return await client().fetchAs<ExternalFeed>(
    `/v1/courses/{course_id}/external_feeds/{external_feed_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
