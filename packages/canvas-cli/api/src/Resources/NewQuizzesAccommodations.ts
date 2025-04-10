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
  user_id: number;
  /**
   * Amount of extra time (in minutes) for quiz submission
   *
   * Type: integer
   */
  extra_time: number;
  /** Apply accommodations to ongoing quiz sessions */
  apply_to_in_progress_quiz_sessions: boolean;
  /** Removes one incorrect answer from multiple-choice questions with 4+ choices */
  reduce_choices_enabled: boolean;
};

/** Request format for setting quiz-level accommodations */
export type QuizAccommodationRequest = {
  /**
   * Canvas user ID of the student receiving accommodations
   *
   * Type: integer
   */
  user_id: number;
  /**
   * Amount of extra time (in minutes) for quiz submission
   *
   * Type: integer
   */
  extra_time: number;
  /**
   * Number of additional attempts allowed beyond the quiz limit
   *
   * Type: integer
   */
  extra_attempts: number;
  /** Removes one incorrect answer from multiple-choice questions with 4+ choices */
  reduce_choices_enabled: boolean;
};
