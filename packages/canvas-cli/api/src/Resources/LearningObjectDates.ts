import { AssignmentOverride } from './Assignments.js';

export type LearningObjectDates = {
  /**
   * The ID of the learning object (not present for checkpoints)
   *
   * Type: integer
   */
  id: number;
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
  /** Whether the learning object is only visible to overrides */
  only_visible_to_overrides: boolean;
  /** Whether the learning object is graded (and thus has a due date) */
  graded: boolean;
  /** [exclusive to blueprint child content only] list of lock types */
  blueprint_date_locks: string[];
  /** Whether the learning object is visible to everyone */
  visible_to_everyone: boolean;
  /** Paginated list of AssignmentOverride objects */
  overrides: string[];
  /**
   * List of Checkpoint objects, only present if a learning object has
   * subAssignments
   */
  checkpoints: string[];
  /** The tag identifying the type of checkpoint (only present for checkpoints) */
  tag: string;
};
