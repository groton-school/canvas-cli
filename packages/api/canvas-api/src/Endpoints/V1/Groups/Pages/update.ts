import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Page } from '../../../../Resources/Pages.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  url_or_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
     * The title for the new page. NOTE: changing a page&#x27;s title will change its
url. The updated url will be returned in the result.
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
     * Schedule a future date/time to publish the page. This will have no effect unless the
&quot;Scheduled Page Publication&quot; feature is enabled in the account. If a future date is
set and the page is already published, it will be unpublished.
     *
     * format: date-time
     *
     * 
     */
  'wiki_page[publish_at]': string;
  /**
   * Set an unhidden page as the front page (if true)
   *
   * type: boolean
   *
   *
   */
  'wiki_page[front_page]': boolean | string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update/create page
 *
 * Update the title or contents of a wiki page

NOTE: You cannot specify the ID when creating a page. If you pass a numeric value
as the page identifier and that does not represent a page ID that already
exists, it will be interpreted as a URL.
 *
 * nickname: update_create_page_groups
 *
 * 
 *
 * 
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/groups/{group_id}/pages/{url_or_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
