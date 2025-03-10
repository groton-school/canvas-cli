import {
  DateTimeString,
  HTMLString,
  JSONString,
  ListOf
} from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import { LockInfo } from './Assignments.js';
import { canvas, stringify } from './Client.js';
import * as Courses from './Courses.js';
import { isError } from './Error.js';
import { url } from './URL.js';

export type Model = {
  /** the ID of the page */
  page_id: number;
  /** the unique locator for the page */
  url: string;
  /** the title of the page */
  title: string;
  /** the creation date for the page */
  created_at: DateTimeString<'ISO'>;
  /** the date the page was last updated */
  updated_at: DateTimeString<'ISO'>;
  /** roles allowed to edit the page; comma-separated list comprising a combination
   * of 'teachers', 'students', 'members', and/or 'public' if not supplied, course
   * defaults are used */
  editing_roles: ListOf<'teachers' | 'students' | 'members' | 'public', ','>;
  /** the User who last edited the page (this may not be present if the page was
   * imported from another system) */
  last_edited_by: number | null;
  /** the page content, in HTML (present when requesting a single page; optionally
   * included when listing pages) */
  body: HTMLString;
  /** whether the page is published (true) or draft state (false). */
  published: true;
  /** scheduled publication date for this page */
  publish_at: DateTimeString<'ISO'>;
  /** whether this page is the front page for the wiki */
  front_page: boolean;
  /** Whether or not this is locked for the user. */
  locked_for_user: boolean;
  /** (Optional) Information for the user about the lock. Present when
   * locked_for_user is true. */
  lock_info?: LockInfo | null;
  /** (Optional) An explanation of why this is locked for the user. Present when
   * locked_for_user is true. */
  lock_explanation?: string;
  /** The editor used to create and edit this page. May be one of 'rce' or
   * 'block_editor'. */
  editor: 'rce' | 'block_editor';
  /** The block editor attributes for this page. (optionally included, and only if
   * this is a block editor created page) */
  block_editor_attributes?: {
    id: 278;
    version: string;
    blocks: JSONString;
  };
};

export type PageRevision = {
  /** an identifier for this revision of the page */
  revision_id: number;
  /** the time when this revision was saved */
  updated_at: DateTimeString<'ISO'>;
  /** whether this is the latest revision or not */
  latest: boolean;
  /** the User who saved this revision, if applicable (this may not be present if
   * the page was imported from another system) */
  edited_by: number | null;
  /** the following fields are not included in the index action and may be omitted
   * from the show action via summary=1 the historic url of the page */
  url?: string;
  /** the historic page title */
  title?: string;
  /** the historic page contents */
  body?: HTMLString;
};

export type Parameters = {
  /** The title for the new page. */
  'wiki_page[title]': string;
  /** The content for the new page. */
  'wiki_page[body]'?: HTMLString;
  /** Which user roles are allowed to edit this page. Any combination of these roles is allowed (separated by commas).

        “teachers”

        Allows editing by teachers in the course.

        “students”

        Allows editing by students in the course.

        “members”

        For group wikis, allows editing by members of the group.

        “public”

        Allows editing by any user.

        Allowed values:
        teachers, students, members, public */
  'wiki_page[editing_roles]'?: ListOf<
    'teachers' | 'students' | 'members' | 'public',
    ','
  >;
  /** Whether participants should be notified when this page changes. */
  'wiki_page[notify_of_update]'?: boolean;
  /** Whether the page is published (true) or draft state (false). */
  'wiki_page[published]'?: boolean;
  /** Set an unhidden page as the front page (if true) */
  'wiki_page[front_page]'?: boolean;
  /** Schedule a future date/time to publish the page. This will have no effect unless the “Scheduled Page Publication” feature is enabled in the account. If a future date is supplied, the page will be unpublished and wiki_page will be ignored. */
  'wiki_page[publish_at]'?: DateTimeString<'ISO'>;
};

type CreateOptions = {
  course: Courses.Model;
  args: Parameters;
};

export async function create({ course, args }: CreateOptions) {
  const spinner = ora(
    `Creating page ${Colors.value(args['wiki_page[title]'])}`
  ).start();
  const result = (await canvas().fetch(`/api/v1/courses/${course.id}/pages`, {
    method: 'POST',
    body: new URLSearchParams(stringify(args))
  })) as Model;
  if (isError(result)) {
    spinner.fail(
      `Error creating page ${Colors.value(args['wiki_page[title]'])}`
    );
    throw new Error(
      `Error create page: ${Log.syntaxColor({ ...Courses.basic(course), args: stringify(args) })}`
    );
  }
  spinner.succeed(
    `Created ${result.front_page ? 'front ' : ''}page ${Colors.value(result.title)} at ${Colors.url(url(`/courses/${course.id}/pages/${result.url}`))}`
  );
  return result;
}
