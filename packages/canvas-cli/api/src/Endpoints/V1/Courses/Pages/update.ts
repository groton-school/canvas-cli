import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type updatePathParameters = {
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
  url_or_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The title for the new page. NOTE: changing a page's title will change its
   * url. The updated url will be returned in the result.
   */
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
   * Schedule a future date/time to publish the page. This will have no effect
   * unless the "Scheduled Page Publication" feature is enabled in the
   * account. If a future date is set and the page is already published, it
   * will be unpublished.
   *
   * Format: date-time
   */
  'wiki_page[publish_at]': string;
  /**
   * Set an unhidden page as the front page (if true)
   *
   * Type: boolean
   */
  'wiki_page[front_page]': boolean | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update/create page
 *
 * Update the title or contents of a wiki page
 *
 * NOTE: You cannot specify the ID when creating a page. If you pass a numeric
 * value as the page identifier and that does not represent a page ID that
 * already exists, it will be interpreted as a URL.
 *
 * Nickname: update_create_page_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/courses/{course_id}/pages/{url_or_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
