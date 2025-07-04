import { JSONObject } from '@battis/typescript-tricks';

export type Score = {
  /** The lti_user_id or the Canvas user_id */
  userId: string;
  /**
   * The Current score received in the tool for this line item and user, scaled
   * to the scoreMaximum
   *
   * Type: number
   */
  scoreGiven: number | string;
  /**
   * Maximum possible score for this result; it must be present if scoreGiven is
   * present.
   *
   * Type: number
   */
  scoreMaximum: number | string;
  /** Comment visible to the student about this score. */
  comment: string;
  /**
   * Date and time when the score was modified in the tool. Should use subsecond
   * precision.
   */
  timestamp: string;
  /**
   * Indicate to Canvas the status of the user towards the activity's
   * completion. Must be one of Initialized, Started, InProgress, Submitted,
   * Completed
   */
  activityProgress: string;
  /**
   * Indicate to Canvas the status of the grading process. A value of
   * PendingManual will require intervention by a grader. Values of NotReady,
   * Failed, and Pending will cause the scoreGiven to be ignored. FullyGraded
   * values will require no action. Possible values are NotReady, Failed,
   * Pending, PendingManual, FullyGraded
   */
  gradingProgress: string;
  /**
   * Contains metadata about the submission attempt, like submittedAt: Date and
   * time that the submission was originally created - should use
   * ISO8601-formatted date with subsecond precision.
   *
   * Object
   */
  submission: JSONObject;
};
