import { Assignment } from '../../../../Resources/Assignments.js';
import { File } from '../../../../Resources/Files.js';

type Parameters = {
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
   */
  published: boolean;
  /**
   * If a timestamp is given, the topic will not be published until that time.
   *
   * Format: 'date-time'
   */
  delayed_post_at: string;
  /** Whether or not users can rate entries in this topic. */
  allow_rating: boolean;
  /**
   * If a timestamp is given, the topic will be scheduled to lock at the
   * provided timestamp. If the timestamp is in the past, the topic will be
   * locked.
   *
   * Format: 'date-time'
   */
  lock_at: string;
  /** If true, the topic will have an associated podcast feed. */
  podcast_enabled: boolean;
  /**
   * If true, the podcast will include posts from students as well. Implies
   * podcast_enabled.
   */
  podcast_has_student_posts: boolean;
  /**
   * If true then a user may not respond to other replies until that user has
   * made an initial reply. Defaults to false.
   */
  require_initial_post: boolean;
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
   */
  is_announcement: boolean;
  /** If true, this topic will be listed in the "Pinned Discussion" section */
  pinned: boolean;
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
   * Format: int64
   */
  group_category_id: number;
  /** If true, only graders will be allowed to rate entries. */
  only_graders_can_rate: boolean;
  /** Default sort order of the discussion. Accepted values are "asc", "desc". */
  sort_order: string;
  /** If true, users cannot choose their prefered sort order */
  sort_order_locked: boolean;
  /** If true, thread will be expanded by default */
  expanded: boolean;
  /** If true, users cannot choose their prefered thread expansion setting */
  expanded_locked: boolean;
  /** (DEPRECATED) If true, entries will be sorted by rating. */
  sort_by_rating: boolean;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: File;
  /**
   * A comma-separated list of sections ids to which the discussion topic
   * should be made specific to. If it is not desired to make the discussion
   * topic specific to sections, then this parameter may be omitted or set to
   * "all". Can only be present only on announcements and only those that are
   * for a course (as opposed to a group).
   */
  specific_sections: string;
  /**
   * If is_announcement and lock_comment are true, ‘Allow Participants to
   * Comment’ setting is disabled.
   */
  lock_comment: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a new discussion topic
 *
 * Create an new discussion topic for the course or group.
 *
 * Nickname: create_new_discussion_topic_courses
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/discussion_topics`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
