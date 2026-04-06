import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Page } from '../../../../Resources/Pages.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The title for the new page. */
  'wiki_page[title]': string;
  /** The content for the new page. */
  'wiki_page[body]': string;
  /**
   * Which user roles are allowed to edit this page. Any combination of these
   * roles is allowed (separated by commas).
   *
   * "teachers":: Allows editing by teachers in the course. "students"::
   * Allows editing by students in the course. "members":: For group wikis,
   * allows editing by members of the group. "public":: Allows editing by any
   * user.
   */
  'wiki_page[editing_roles]': string;
  /**
   * Whether participants should be notified when this page changes.
   *
   * Type: boolean
   */
  'wiki_page[notify_of_update]': boolean | string;
  /**
   * Whether the page is published (true) or draft state (false).
   *
   * Type: boolean
   */
  'wiki_page[published]': boolean | string;
  /**
   * Set an unhidden page as the front page (if true)
   *
   * Type: boolean
   */
  'wiki_page[front_page]': boolean | string;
  /**
   * Schedule a future date/time to publish the page. This will have no effect
   * unless the "Scheduled Page Publication" feature is enabled in the
   * account. If a future date is supplied, the page will be unpublished and
   * +wiki_page[published]+ will be ignored.
   *
   * Format: date-time
   */
  'wiki_page[publish_at]': string;
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: createSearchParameters;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: createFormParameters;
        strict: true;
      }
  );

/**
 * Create page
 *
 * Create a new wiki page
 *
 * Nickname: create_page_groups
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/pages`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
