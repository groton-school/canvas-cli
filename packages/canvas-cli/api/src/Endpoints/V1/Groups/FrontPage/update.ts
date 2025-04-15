import { client } from '../../../../Client.js';
import { Page } from '../../../../Resources/Pages.js';

export type updatePathParameters = {
  /** ID */
  group_id: string;
};

export type updateFormParameters = {
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
  /** Whether participants should be notified when this page changes. */
  'wiki_page[notify_of_update]': boolean;
  /** Whether the page is published (true) or draft state (false). */
  'wiki_page[published]': boolean;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update/create front page
 *
 * Update the title or contents of the front page
 *
 * Nickname: update_create_front_page_groups
 */
export async function update(options: Options) {
  return await client().fetchAs<Page>(`/api/v1/groups/{group_id}/front_page`, {
    method: 'PUT',
    ...options
  });
}
