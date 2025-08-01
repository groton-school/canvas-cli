import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
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
 * Update/create front page
 *
 * Update the title or contents of the front page
 *
 * Nickname: update_create_front_page_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Page>(
    `/api/v1/courses/{course_id}/front_page`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
