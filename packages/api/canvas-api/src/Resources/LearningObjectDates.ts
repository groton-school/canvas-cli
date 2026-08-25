import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { AssignmentOverride } from './Assignments.js';

/**
 *
 */
export type LearningObjectDates = {
  /**
   * the ID of the learning object (not present for checkpoints)
   *
   * type: integer
   */
  id: number | string;
  /**
   * the due date for the learning object. returns null if not present or applicable. never applicable for ungraded discussions, pages, and files
   *
   * format: date-time
   */
  due_at: string;
  /**
   * the lock date (learning object is locked after this date). returns null if not present
   *
   * format: date-time
   */
  lock_at: string;
  /**
   * the reply_to_topic sub_assignment due_date. returns null if not present
   *
   * format: date-time
   */
  reply_to_topic_due_at: string;
  /**
   * the reply_to_entry sub_assignment due_date. returns null if not present
   *
   * format: date-time
   */
  required_replies_due_at: string;
  /**
   * the unlock date (learning object is unlocked after this date). returns null if not present
   *
   * format: date-time
   */
  unlock_at: string;
  /**
   * whether the learning object is only visible to overrides
   *
   * type: boolean
   */
  only_visible_to_overrides: boolean | string;
  /**
   * whether the learning object is graded (and thus has a due date)
   *
   * type: boolean
   */
  graded: boolean | string;
  /**
   * [exclusive to blueprint child content only] list of lock types
   *
   *
   */
  blueprint_date_locks: string[];
  /**
   * whether the learning object is visible to everyone
   *
   * type: boolean
   */
  visible_to_everyone: boolean | string;
  /**
   * paginated list of AssignmentOverride objects
   *
   *
   */
  overrides: AssignmentOverride[];
  /**
   * list of Checkpoint objects, only present if a learning object has subAssignments
   *
   *
   */
  checkpoints: LearningObjectDates[];
  /**
   * the tag identifying the type of checkpoint (only present for checkpoints)
   *
   *
   */
  tag: string;
  /**
   * peer review sub assignment details, only present when include_peer_review=true is specified, assignment has peer reviews enabled, and peer_review_allocation_and_grading feature flag is enabled
   *
   * object
   */
  peer_review_sub_assignment: JSONObject;
};
