import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { ExternalFeed } from '../../../../Resources/AnnouncementExternalFeeds.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The url to the external rss or atom feed
   *
   *
   *
   *
   */
  url: string;
  /**
   * If given, only feed entries that contain this string in their title will be imported
   *
   * type: boolean
   *
   *
   */
  header_match: boolean | string;
  /**
   * Defaults to &quot;full&quot;
   *
   *
   *
   *
   */
  verbosity: string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create an external feed
 *
 * Create a new external feed for the course or group.
 *
 * nickname: create_external_feed_groups
 *
 *
 *
 *
 */
export async function create(options: Options) {
  const response = await client().fetchAs<ExternalFeed>(
    `/api/v1/groups/{group_id}/external_feeds`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
