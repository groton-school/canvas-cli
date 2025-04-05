export type QuizSubmission = {
  /**
   * The ID of the quiz submission.
   *
   * Format: int64
   */
  id: number;
  /**
   * The ID of the Quiz the quiz submission belongs to.
   *
   * Format: int64
   */
  quiz_id: number;
  /**
   * The ID of the Student that made the quiz submission.
   *
   * Format: int64
   */
  user_id: number;
  /**
   * The ID of the Submission the quiz submission represents.
   *
   * Format: int64
   */
  submission_id: number;
  /**
   * The time at which the student started the quiz submission.
   *
   * Format: date-time
   */
  started_at: string;
  /**
   * The time at which the student submitted the quiz submission.
   *
   * Format: date-time
   */
  finished_at: string;
  /**
   * The time at which the quiz submission will be overdue, and be flagged as a
   * late submission.
   *
   * Format: date-time
   */
  end_at: string;
  /**
   * For quizzes that allow multiple attempts, this field specifies the quiz
   * submission attempt number.
   *
   * Format: int64
   */
  attempt: number;
  /**
   * Number of times the student was allowed to re-take the quiz over the
   * multiple-attempt limit.
   *
   * Format: int64
   */
  extra_attempts: number;
  /**
   * Amount of extra time allowed for the quiz submission, in minutes.
   *
   * Format: int64
   */
  extra_time: number;
  /** The student can take the quiz even if it's locked for everyone else */
  manually_unlocked: boolean;
  /**
   * Amount of time spent, in seconds.
   *
   * Format: int64
   */
  time_spent: number;
  /**
   * The score of the quiz submission, if graded.
   *
   * Format: int64
   */
  score: number;
  /**
   * The original score of the quiz submission prior to any re-grading.
   *
   * Format: int64
   */
  score_before_regrade: number;
  /**
   * For quizzes that allow multiple attempts, this is the score that will be
   * used, which might be the score of the latest, or the highest, quiz
   * submission.
   *
   * Format: int64
   */
  kept_score: number;
  /**
   * Number of points the quiz submission's score was fudged by.
   *
   * Format: int64
   */
  fudge_points: number;
  /** Whether the student has viewed their results to the quiz. */
  has_seen_results: boolean;
  /**
   * The current state of the quiz submission. Possible values:
   * ['untaken'|'pending_review'|'complete'|'settings_only'|'preview'].
   */
  workflow_state: string;
  /** Indicates whether the quiz submission is overdue and needs submission */
  overdue_and_needs_submission: boolean;
};
