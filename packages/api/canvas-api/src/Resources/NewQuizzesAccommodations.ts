import { JSONObject } from '@battis/typescript-tricks';

/** Response structure for processing accommodations */
export type AccommodationResponse = {
  /** Processing result message */
  message: string;
  /** List of successfully processed accommodations */
  successful: JSONObject[];
  /** List of accommodations that failed to process */
  failed: JSONObject[];
};

/** Request format for setting course-level accommodations */
export type CourseAccommodationRequest = {
  /**
   * Canvas user ID of the student receiving accommodations
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * Amount of extra time (in minutes) for quiz submission
   *
   * Type: integer
   */
  extra_time: number | string;
  /**
   * Apply accommodations to ongoing quiz sessions
   *
   * Type: boolean
   */
  apply_to_in_progress_quiz_sessions: boolean | string;
  /**
   * Removes one incorrect answer from multiple-choice questions with 4+ choices
   *
   * Type: boolean
   */
  reduce_choices_enabled: boolean | string;
};

/** Request format for setting quiz-level accommodations */
export type QuizAccommodationRequest = {
  /**
   * Canvas user ID of the student receiving accommodations
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * Amount of extra time (in minutes) for quiz submission
   *
   * Type: integer
   */
  extra_time: number | string;
  /**
   * Number of additional attempts allowed beyond the quiz limit
   *
   * Type: integer
   */
  extra_attempts: number | string;
  /**
   * Removes one incorrect answer from multiple-choice questions with 4+ choices
   *
   * Type: boolean
   */
  reduce_choices_enabled: boolean | string;
};
