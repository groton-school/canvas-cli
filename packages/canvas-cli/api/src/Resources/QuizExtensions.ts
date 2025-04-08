export type QuizExtension = {
  /**
   * The ID of the Quiz the quiz extension belongs to.
   *
   * Format: 'int64'
   */
  quiz_id: number;
  /**
   * The ID of the Student that needs the quiz extension.
   *
   * Format: 'int64'
   */
  user_id: number;
  /**
   * Number of times the student is allowed to re-take the quiz over the
   * multiple-attempt limit.
   *
   * Format: 'int64'
   */
  extra_attempts: number;
  /**
   * Amount of extra time allowed for the quiz submission, in minutes.
   *
   * Format: 'int64'
   */
  extra_time: number;
  /** The student can take the quiz even if it's locked for everyone else */
  manually_unlocked: boolean;
  /**
   * The time at which the quiz submission will be overdue, and be flagged as a
   * late submission.
   *
   * Format: 'date-time'
   */
  end_at: string;
};
