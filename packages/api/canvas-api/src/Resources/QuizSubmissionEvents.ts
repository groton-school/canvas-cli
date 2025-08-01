import { JSONObject } from '@battis/typescript-tricks';

/** An event passed from the Quiz Submission take page */
export type QuizSubmissionEvent = {
  /**
   * A timestamp record of creation time
   *
   * Format: date-time
   */
  created_at: string;
  /** The type of event being sent */
  event_type: string;
  /**
   * Custom contextual data for the specific event type
   *
   * Object
   */
  event_data: JSONObject;
};
