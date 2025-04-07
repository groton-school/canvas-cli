import { Page } from '../../../../Resources/Pages.js';

type Parameters = {
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
  /** Whether participants should be notified when this page changes. */
  'wiki_page[notify_of_update]': boolean;
  /** Whether the page is published (true) or draft state (false). */
  'wiki_page[published]': boolean;
  /** Set an unhidden page as the front page (if true) */
  'wiki_page[front_page]': boolean;
  /**
   * Schedule a future date/time to publish the page. This will have no effect
   * unless the "Scheduled Page Publication" feature is enabled in the
   * account. If a future date is supplied, the page will be unpublished and
   * wiki_page[published] will be ignored.
   *
   * Format: 'date-time'
   */
  'wiki_page[publish_at]': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create page
 *
 * Create a new wiki page
 *
 * Nickname: create_page_courses
 */
export async function create({ parameters }: Options): Promise<Page> {
  return await (
    await fetch(`/v1/courses/{course_id}/pages`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
