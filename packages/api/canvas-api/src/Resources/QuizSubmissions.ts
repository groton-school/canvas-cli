import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type QuizSubmission = {
  /**
   * The ID of the quiz submission.
   *
   * type: integer

format: 'int64'
   */
  id: number | string;
  /**
   * The ID of the Quiz the quiz submission belongs to.
   *
   * type: integer

format: 'int64'
   */
  quiz_id: number | string;
  /**
   * The ID of the Student that made the quiz submission.
   *
   * type: integer

format: 'int64'
   */
  user_id: number | string;
  /**
   * The ID of the Submission the quiz submission represents.
   *
   * type: integer

format: 'int64'
   */
  submission_id: number | string;
  /**
   * The time at which the student started the quiz submission.
   *
   * 

format: 'date-time'
   */
  started_at: string;
  /**
   * The time at which the student submitted the quiz submission.
   *
   * 

format: 'date-time'
   */
  finished_at: string;
  /**
   * The time at which the quiz submission will be overdue, and be flagged as a late submission.
   *
   * 

format: 'date-time'
   */
  end_at: string;
  /**
   * For quizzes that allow multiple attempts, this field specifies the quiz submission attempt number.
   *
   * type: integer

format: 'int64'
   */
  attempt: number | string;
  /**
   * Number of times the student was allowed to re-take the quiz over the multiple-attempt limit.
   *
   * type: integer

format: 'int64'
   */
  extra_attempts: number | string;
  /**
   * Amount of extra time allowed for the quiz submission, in minutes.
   *
   * type: integer

format: 'int64'
   */
  extra_time: number | string;
  /**
   * The student can take the quiz even if it's locked for everyone else
   *
   * type: boolean
   */
  manually_unlocked: boolean | string;
  /**
   * Amount of time spent, in seconds.
   *
   * type: integer

format: 'int64'
   */
  time_spent: number | string;
  /**
   * The score of the quiz submission, if graded.
   *
   * type: integer

format: 'int64'
   */
  score: number | string;
  /**
   * The original score of the quiz submission prior to any re-grading.
   *
   * type: integer

format: 'int64'
   */
  score_before_regrade: number | string;
  /**
   * For quizzes that allow multiple attempts, this is the score that will be used, which might be the score of the latest, or the highest, quiz submission.
   *
   * type: integer

format: 'int64'
   */
  kept_score: number | string;
  /**
   * Number of points the quiz submission's score was fudged by.
   *
   * type: integer

format: 'int64'
   */
  fudge_points: number | string;
  /**
   * Whether the student has viewed their results to the quiz.
   *
   * type: boolean
   */
  has_seen_results: boolean | string;
  /**
   * The current state of the quiz submission. Possible values: ['untaken'|'pending_review'|'complete'|'settings_only'|'preview'].
   *
   *
   */
  workflow_state: string;
  /**
   * Indicates whether the quiz submission is overdue and needs submission
   *
   * type: boolean
   */
  overdue_and_needs_submission: boolean | string;
};
