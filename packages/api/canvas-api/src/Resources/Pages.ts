import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { LockInfo } from './Assignments.js';
import { User } from './Users.js';

/**
 *
 */
export type Page = {
  /**
   * the ID of the page
   *
   * type: integer
   */
  page_id: number | string;
  /**
   * the unique locator for the page
   *
   *
   */
  url: string;
  /**
   * the title of the page
   *
   *
   */
  title: string;
  /**
   * the creation date for the page
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the date the page was last updated
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * (DEPRECATED) whether this page is hidden from students (note: this is always reflected as the inverse of the published value)
   *
   * type: boolean
   */
  hide_from_students: boolean | string;
  /**
   * roles allowed to edit the page; comma-separated list comprising a combination of 'teachers', 'students', 'members', and/or 'public' if not supplied, course defaults are used
   *
   *
   */
  editing_roles: string;
  /**
   * the User who last edited the page (this may not be present if the page was imported from another system)
   *
   *
   */
  last_edited_by: User;
  /**
   * the page content, in HTML (present when requesting a single page; optionally included when listing pages)
   *
   *
   */
  body: string;
  /**
   * whether the page is published (true) or draft state (false).
   *
   * type: boolean
   */
  published: boolean | string;
  /**
   * scheduled publication date for this page
   *
   * format: date-time
   */
  publish_at: string;
  /**
   * whether this page is the front page for the wiki
   *
   * type: boolean
   */
  front_page: boolean | string;
  /**
   * Whether or not this is locked for the user.
   *
   * type: boolean
   */
  locked_for_user: boolean | string;
  /**
   * (Optional) Information for the user about the lock. Present when locked_for_user is true.
   *
   *
   */
  lock_info: LockInfo;
  /**
   * (Optional) An explanation of why this is locked for the user. Present when locked_for_user is true.
   *
   *
   */
  lock_explanation: string;
  /**
   * The editor used to create and edit this page. May be one of 'rce' or 'block_editor'.
   *
   *
   */
  editor: string;
  /**
   * The block editor attributes for this page. (optionally included, and only if this is a block editor created page)
   *
   * object
   */
  block_editor_attributes: JSONObject;
};

/**
 *
 */
export type PageRevision = {
  /**
   * an identifier for this revision of the page
   *
   * type: integer
   */
  revision_id: number | string;
  /**
   * the time when this revision was saved
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * whether this is the latest revision or not
   *
   * type: boolean
   */
  latest: boolean | string;
  /**
   * the User who saved this revision, if applicable (this may not be present if the page was imported from another system)
   *
   *
   */
  edited_by: User;
  /**
   * the following fields are not included in the index action and may be omitted from the show action via summary=1 the historic url of the page
   *
   *
   */
  url: string;
  /**
   * the historic page title
   *
   *
   */
  title: string;
  /**
   * the historic page contents
   *
   *
   */
  body: string;
};
