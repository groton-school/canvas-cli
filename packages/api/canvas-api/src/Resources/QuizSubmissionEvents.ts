import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 * An event passed from the Quiz Submission take page
 */
export type QuizSubmissionEvent = {
  /**
   * a timestamp record of creation time
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the type of event being sent
   *
   *
   */
  event_type: string;
  /**
   * custom contextual data for the specific event type
   *
   * object
   */
  event_data: JSONObject;
};
