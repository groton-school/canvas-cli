import { JSONValue } from '@battis/typescript-tricks';

export type QuizExtension = {
  /**
   * The ID of the Quiz the quiz extension belongs to.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  quiz_id: number | string;
  /**
   * The ID of the Student that needs the quiz extension.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  user_id: number | string;
  /**
   * Number of times the student is allowed to re-take the quiz over the
   * multiple-attempt limit.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  extra_attempts: number | string;
  /**
   * Amount of extra time allowed for the quiz submission, in minutes.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  extra_time: number | string;
  /**
   * The student can take the quiz even if it's locked for everyone else
   *
   * Type: boolean
   */
  manually_unlocked: boolean | string;
  /**
   * The time at which the quiz submission will be overdue, and be flagged as a
   * late submission.
   *
   * Format: 'date-time'
   */
  end_at: string;
};
