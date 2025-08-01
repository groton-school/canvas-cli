import { JSONObject } from '@battis/typescript-tricks';
import { LockInfo } from './Assignments.js';

/** A file attachment */
export type FileAttachment = {
  'content-type': string;
  url: string;
  filename: string;
  display_name: string;
};

/** A discussion topic */
export type DiscussionTopic = {
  /**
   * The ID of this topic.
   *
   * Type: integer
   */
  id: number | string;
  /** The topic title. */
  title: string;
  /** The HTML content of the message body. */
  message: string;
  /** The URL to the discussion topic in canvas. */
  html_url: string;
  /**
   * The datetime the topic was posted. If it is null it hasn't been posted yet.
   * (see delayed_post_at)
   *
   * Format: date-time
   */
  posted_at: string;
  /**
   * The datetime for when the last reply was in the topic.
   *
   * Format: date-time
   */
  last_reply_at: string;
  /**
   * If true then a user may not respond to other replies until that user has
   * made an initial reply. Defaults to false.
   *
   * Type: boolean
   */
  require_initial_post: boolean | string;
  /**
   * Whether or not posts in this topic are visible to the user.
   *
   * Type: boolean
   */
  user_can_see_posts: boolean | string;
  /**
   * The count of entries in the topic.
   *
   * Type: integer
   */
  discussion_subentry_count: number | string;
  /** The read_state of the topic for the current user, 'read' or 'unread'. */
  read_state: string;
  /**
   * The count of unread entries of this topic for the current user.
   *
   * Type: integer
   */
  unread_count: number | string;
  /**
   * Whether or not the current user is subscribed to this topic.
   *
   * Type: boolean
   */
  subscribed: boolean | string;
  /**
   * (Optional) Why the user cannot subscribe to this topic. Only one reason
   * will be returned even if multiple apply. Can be one of:
   * 'initial_post_required': The user must post a reply first;
   * 'not_in_group_set': The user is not in the group set for this graded group
   * discussion; 'not_in_group': The user is not in this topic's group;
   * 'topic_is_announcement': This topic is an announcement
   */
  subscription_hold: string;
  /**
   * The unique identifier of the assignment if the topic is for grading,
   * otherwise null.
   *
   * Type: integer
   */
  assignment_id: number | string;
  /**
   * The datetime to publish the topic (if not right away).
   *
   * Format: date-time
   */
  delayed_post_at: string;
  /**
   * Whether this discussion topic is published (true) or draft state (false)
   *
   * Type: boolean
   */
  published: boolean | string;
  /**
   * The datetime to lock the topic (if ever).
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * Whether or not the discussion is 'closed for comments'.
   *
   * Type: boolean
   */
  locked: boolean | string;
  /**
   * Whether or not the discussion has been 'pinned' by an instructor
   *
   * Type: boolean
   */
  pinned: boolean | string;
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
  /** The username of the topic creator. */
  user_name: string;
  /**
   * DEPRECATED An array of topic_ids for the group discussions the user is a
   * part of.
   */
  topic_children: number | string[];
  /**
   * An array of group discussions the user is a part of. Fields include: id,
   * group_id
   */
  group_topic_children: JSONObject[];
  /**
   * If the topic is for grading and a group assignment this will point to the
   * original topic in the course.
   *
   * Type: integer
   */
  root_topic_id: number | string;
  /** If the topic is a podcast topic this is the feed url for the current user. */
  podcast_url: string;
  /**
   * The type of discussion. Values are 'side_comment' or 'not_threaded', for
   * discussions that only allow one level of nested comments, and 'threaded'
   * for fully threaded discussions.
   */
  discussion_type: string;
  /**
   * The unique identifier of the group category if the topic is a group
   * discussion, otherwise null.
   *
   * Type: integer
   */
  group_category_id: number | string;
  /** Array of file attachments. */
  attachments: FileAttachment[];
  /**
   * The current user's permissions on this topic.
   *
   * Object
   */
  permissions: JSONObject;
  /**
   * Whether or not users can rate entries in this topic.
   *
   * Type: boolean
   */
  allow_rating: boolean | string;
  /**
   * Whether or not grade permissions are required to rate entries.
   *
   * Type: boolean
   */
  only_graders_can_rate: boolean | string;
  /**
   * DEPRECATED, Whether or not entries should be sorted by rating.
   *
   * Type: boolean
   */
  sort_by_rating: boolean | string;
  /** How entries should be sorted by default. */
  sort_order: string;
  /**
   * Can users decide their preferred sort order.
   *
   * Type: boolean
   */
  sort_order_locked: boolean | string;
  /**
   * Threaded replies should be expanded by default.
   *
   * Type: boolean
   */
  expand: boolean | string;
  /**
   * Can users decide their preferred thread expand setting.
   *
   * Type: boolean
   */
  expand_locked: boolean | string;
};
