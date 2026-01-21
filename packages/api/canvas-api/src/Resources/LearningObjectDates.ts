import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { AssignmentOverride } from './Assignments.js';

export type LearningObjectDates = {
  /**
   * The ID of the learning object (not present for checkpoints)
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The due date for the learning object. returns null if not present or
   * applicable. never applicable for ungraded discussions, pages, and files
   *
   * Format: date-time
   */
  due_at: string;
  /**
   * The lock date (learning object is locked after this date). returns null if
   * not present
   *
   * Format: date-time
   */
  lock_at: string;
  /**
   * The reply_to_topic sub_assignment due_date. returns null if not present
   *
   * Format: date-time
   */
  reply_to_topic_due_at: string;
  /**
   * The reply_to_entry sub_assignment due_date. returns null if not present
   *
   * Format: date-time
   */
  required_replies_due_at: string;
  /**
   * The unlock date (learning object is unlocked after this date). returns null
   * if not present
   *
   * Format: date-time
   */
  unlock_at: string;
  /**
   * Whether the learning object is only visible to overrides
   *
   * Type: boolean
   */
  only_visible_to_overrides: boolean | string;
  /**
   * Whether the learning object is graded (and thus has a due date)
   *
   * Type: boolean
   */
  graded: boolean | string;
  /** [exclusive to blueprint child content only] list of lock types */
  blueprint_date_locks: string[];
  /**
   * Whether the learning object is visible to everyone
   *
   * Type: boolean
   */
  visible_to_everyone: boolean | string;
  /** Paginated list of AssignmentOverride objects */
  overrides: AssignmentOverride[];
  /**
   * List of Checkpoint objects, only present if a learning object has
   * subAssignments
   */
  checkpoints: LearningObjectDates[];
  /** The tag identifying the type of checkpoint (only present for checkpoints) */
  tag: string;
  /**
   * Peer review sub assignment details, only present when
   * include_peer_review=true is specified, assignment has peer reviews enabled,
   * and peer_review_allocation_and_grading feature flag is enabled
   *
   * Object
   */
  peer_review_sub_assignment: JSONObject;
};
