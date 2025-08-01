import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

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
  topic_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** No description */
  title: string;
  /** No description */
  message: string;
  /**
   * The type of discussion. Defaults to side_comment or not_threaded if not
   * value is given. Accepted values are 'side_comment', 'not_threaded' for
   * discussions that only allow one level of nested comments, and 'threaded'
   * for fully threaded discussions.
   */
  discussion_type: string;
  /**
   * Whether this topic is published (true) or draft state (false). Only
   * teachers and TAs have the ability to create draft state topics.
   *
   * Type: boolean
   */
  published: boolean | string;
  /**
   * If a timestamp is given, the topic will not be published until that time.
   *
   * Format: date-time
   */
  delayed_post_at: string;
  /**
   * If a timestamp is given, the topic will be scheduled to lock at the
   * provided timestamp. If the timestamp is in the past, the topic will be
   * locked.
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * If true, the topic will have an associated podcast feed.
   *
   * Type: boolean
   */
  podcast_enabled: boolean | string;
  /**
   * If true, the podcast will include posts from students as well. Implies
   * podcast_enabled.
   *
   * Type: boolean
   */
  podcast_has_student_posts: boolean | string;
  /**
   * If true then a user may not respond to other replies until that user has
   * made an initial reply. Defaults to false.
   *
   * Type: boolean
   */
  require_initial_post: boolean | string;
  /**
   * To create an assignment discussion, pass the assignment parameters as a
   * sub-object. See the {api:AssignmentsApiController#create Create an
   * Assignment API} for the available parameters. The name parameter will be
   * ignored, as it's taken from the discussion title. If you want to make a
   * discussion that was an assignment NOT an assignment, pass set_assignment
   * = false as part of the assignment object
   */
  assignment: Assignment;
  /**
   * If true, this topic is an announcement. It will appear in the
   * announcement's section rather than the discussions section. This requires
   * announcment-posting permissions.
   *
   * Type: boolean
   */
  is_announcement: boolean | string;
  /**
   * If true, this topic will be listed in the "Pinned Discussion" section
   *
   * Type: boolean
   */
  pinned: boolean | string;
  /**
   * By default, discussions are sorted chronologically by creation date, you
   * can pass the id of another topic to have this one show up after the other
   * when they are listed.
   */
  position_after: string;
  /**
   * If present, the topic will become a group discussion assigned to the
   * group.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  group_category_id: number | string;
  /**
   * If true, users will be allowed to rate entries.
   *
   * Type: boolean
   */
  allow_rating: boolean | string;
  /**
   * If true, only graders will be allowed to rate entries.
   *
   * Type: boolean
   */
  only_graders_can_rate: boolean | string;
  /** Default sort order of the discussion. Accepted values are "asc", "desc". */
  sort_order: string;
  /**
   * If true, users cannot choose their prefered sort order
   *
   * Type: boolean
   */
  sort_order_locked: boolean | string;
  /**
   * If true, thread will be expanded by default
   *
   * Type: boolean
   */
  expanded: boolean | string;
  /**
   * If true, users cannot choose their prefered thread expansion setting
   *
   * Type: boolean
   */
  expanded_locked: boolean | string;
  /**
   * (DEPRECATED) If true, entries will be sorted by rating.
   *
   * Type: boolean
   */
  sort_by_rating: boolean | string;
  /**
   * A comma-separated list of sections ids to which the discussion topic
   * should be made specific too. If it is not desired to make the discussion
   * topic specific to sections, then this parameter may be omitted or set to
   * "all". Can only be present only on announcements and only those that are
   * for a course (as opposed to a group).
   */
  specific_sections: string;
  /**
   * If is_announcement and lock_comment are true, ‘Allow Participants to
   * Comment’ setting is disabled.
   *
   * Type: boolean
   */
  lock_comment: boolean | string;
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
 * Update a topic
 *
 * Update an existing discussion topic for the course or group.
 *
 * Nickname: update_topic_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
