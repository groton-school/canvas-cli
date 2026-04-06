import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type delete_external_feed_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  external_feed_id: string | number;
};

export type delete_external_feed_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_external_feed_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_external_feed_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_external_feed_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_external_feed_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_external_feed_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_external_feed_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
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
