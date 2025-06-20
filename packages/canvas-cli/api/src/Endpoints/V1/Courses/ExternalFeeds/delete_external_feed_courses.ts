import { client } from '../../../../Client.js';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type delete_external_feed_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  external_feed_id: string;
};

type Options = {
  pathParams: delete_external_feed_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete an external feed
 *
 * Deletes the external feed.
 *
 * Nickname: delete_external_feed_courses
 */
export async function delete_external_feed_courses(options: Options) {
  const response = await client().fetchAs<ExternalFeed>(
    `/api/v1/courses/{course_id}/external_feeds/{external_feed_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
