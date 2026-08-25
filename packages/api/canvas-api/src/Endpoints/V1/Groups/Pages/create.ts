import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Page } from '../../../../Resources/Pages.js';

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
   * The title for the new page.
   *
   *
   *
   *
   */
  'wiki_page[title]': string;
  /**
   * The content for the new page.
   *
   *
   *
   *
   */
  'wiki_page[body]': string;
  /**
     * Which user roles are allowed to edit this page. Any combination
of these roles is allowed (separated by commas).

&quot;teachers&quot;:: Allows editing by teachers in the course.
&quot;students&quot;:: Allows editing by students in the course.
&quot;members&quot;:: For group wikis, allows editing by members of the group.
&quot;public&quot;:: Allows editing by any user.
     *
     * 
     *
     * 
     */
  'wiki_page[editing_roles]': string;
  /**
   * Whether participants should be notified when this page changes.
   *
   * type: boolean
   *
   *
   */
  'wiki_page[notify_of_update]': boolean | string;
  /**
   * Whether the page is published (true) or draft state (false).
   *
   * type: boolean
   *
   *
   */
  'wiki_page[published]': boolean | string;
  /**
   * Set an unhidden page as the front page (if true)
   *
   * type: boolean
   *
   *
   */
  'wiki_page[front_page]': boolean | string;
  /**
     * Schedule a future date/time to publish the page. This will have no effect unless the
&quot;Scheduled Page Publication&quot; feature is enabled in the account. If a future date is
supplied, the page will be unpublished and +wiki_page[published]+ will be ignored.
     *
     * format: date-time
     *
     * 
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
 * Create page
 *
 * Create a new wiki page
 *
 * nickname: create_page_groups
 *
 *
 *
 *
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
