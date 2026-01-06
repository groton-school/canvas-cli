import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { LockInfo } from './Assignments.js';
import { User } from './Users.js';

export type Page = {
  /**
   * The ID of the page
   *
   * Type: integer
   */
  page_id: number | string;
  /** The unique locator for the page */
  url: string;
  /** The title of the page */
  title: string;
  /**
   * The creation date for the page
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The date the page was last updated
   *
   * Format: date-time
   */
  updated_at: string;
  /**
   * (DEPRECATED) whether this page is hidden from students (note: this is
   * always reflected as the inverse of the published value)
   *
   * Type: boolean
   */
  hide_from_students: boolean | string;
  /**
   * Roles allowed to edit the page; comma-separated list comprising a
   * combination of 'teachers', 'students', 'members', and/or 'public' if not
   * supplied, course defaults are used
   */
  editing_roles: string;
  /**
   * The User who last edited the page (this may not be present if the page was
   * imported from another system)
   */
  last_edited_by: User;
  /**
   * The page content, in HTML (present when requesting a single page;
   * optionally included when listing pages)
   */
  body: string;
  /**
   * Whether the page is published (true) or draft state (false).
   *
   * Type: boolean
   */
  published: boolean | string;
  /**
   * Scheduled publication date for this page
   *
   * Format: date-time
   */
  publish_at: string;
  /**
   * Whether this page is the front page for the wiki
   *
   * Type: boolean
   */
  front_page: boolean | string;
  /**
   * Whether or not this is locked for the user.
   *
   * Type: boolean
   */
  locked_for_user: boolean | string;
  /**
   * (Optional) Information for the user about the lock. Present when
   * locked_for_user is true.
   */
  lock_info: LockInfo;
  /**
   * (Optional) An explanation of why this is locked for the user. Present when
   * locked_for_user is true.
   */
  lock_explanation: string;
  /**
   * The editor used to create and edit this page. May be one of 'rce' or
   * 'block_editor'.
   */
  editor: string;
  /**
   * The block editor attributes for this page. (optionally included, and only
   * if this is a block editor created page)
   *
   * Object
   */
  block_editor_attributes: JSONObject;
};

export type PageRevision = {
  /**
   * An identifier for this revision of the page
   *
   * Type: integer
   */
  revision_id: number | string;
  /**
   * The time when this revision was saved
   *
   * Format: date-time
   */
  updated_at: string;
  /**
   * Whether this is the latest revision or not
   *
   * Type: boolean
   */
  latest: boolean | string;
  /**
   * The User who saved this revision, if applicable (this may not be present if
   * the page was imported from another system)
   */
  edited_by: User;
  /**
   * The following fields are not included in the index action and may be
   * omitted from the show action via summary=1 the historic url of the page
   */
  url: string;
  /** The historic page title */
  title: string;
  /** The historic page contents */
  body: string;
};
