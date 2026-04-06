import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type delete_external_feed_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  external_feed_id: string | number;
};

export type delete_external_feed_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_external_feed_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_external_feed_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_external_feed_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_external_feed_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_external_feed_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_external_feed_groupsSearchParameters;
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
 * Nickname: delete_external_feed_groups
 */
export async function delete_external_feed_groups(options: Options) {
  const response = await client().fetchAs<ExternalFeed>(
    `/api/v1/groups/{group_id}/external_feeds/{external_feed_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
