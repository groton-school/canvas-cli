import { JSONValue } from '@battis/typescript-tricks';

export type GradeChangeEventLinks = {
  /**
   * ID of the assignment associated with the event
   *
   * Type: integer
   */
  assignment: number | string;
  /**
   * ID of the course associated with the event. will match the context_id in
   * the associated assignment if the context type for the assignment is a
   * course
   *
   * Type: integer
   */
  course: number | string;
  /**
   * ID of the student associated with the event. will match the user_id in the
   * associated submission.
   *
   * Type: integer
   */
  student: number | string;
  /**
   * ID of the grader associated with the event. will match the grader_id in the
   * associated submission.
   *
   * Type: integer
   */
  grader: number | string;
  /** ID of the page view during the event if it exists. */
  page_view: string;
};

export type GradeChangeEvent = {
  /** ID of the event. */
  id: string;
  /**
   * Timestamp of the event
   *
   * Format: date-time
   */
  created_at: string;
  /** GradeChange event type */
  event_type: string;
  /**
   * Boolean indicating whether the submission was excused after the change.
   *
   * Type: boolean
   */
  excused_after: boolean | string;
  /**
   * Boolean indicating whether the submission was excused before the change.
   *
   * Type: boolean
   */
  excused_before: boolean | string;
  /** The grade after the change. */
  grade_after: string;
  /** The grade before the change. */
  grade_before: string;
  /**
   * Boolean indicating whether the student name was visible when the grade was
   * given. Could be null if the grade change record was created before this
   * feature existed.
   *
   * Type: boolean
   */
  graded_anonymously: boolean | string;
  /** Version Number of the grade change submission. */
  version_number: string;
  /** The unique request id of the request during the grade change. */
  request_id: string;
  links: GradeChangeEventLinks;
};
