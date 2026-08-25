import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Submission = {
  /**
   *
   *
   *
   */
  lti_course_id: string;
  /**
   *
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * The submission's assignment id
   *
   * type: integer
   */
  assignment_id: number | string;
  /**
   * This is the submission attempt number.
   *
   * type: integer
   */
  attempt: number | string;
  /**
   * The content of the submission, if it was submitted directly in a text field.
   *
   *
   */
  body: string;
  /**
   * The types of submission ex: ('online_text_entry'|'online_url'|'online_upload'|'media_recording'|'student_annotation')
   *
   *
   */
  submission_type: string;
  /**
   * The timestamp when the assignment was submitted
   *
   * format: date-time
   */
  submitted_at: string;
  /**
   * The URL of the submission (for 'online_url' submissions).
   *
   *
   */
  url: string;
  /**
   * The id of the user who created the submission
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * UTC timestamp showing when the user agreed to the EULA (if given by the tool provider)
   *
   *
   */
  eula_agreement_timestamp: string;
  /**
   * The current state of the submission
   *
   *
   */
  workflow_state: string;
  /**
   * Files that are attached to the submission
   *
   *
   */
  attachments: File;
};

/**
 *
 */
export type File = {
  /**
   *
   *
   * type: integer
   */
  size: number | string;
  /**
   *
   *
   *
   */
  'content-type': string;
  /**
   *
   *
   *
   */
  url: string;
  /**
   *
   *
   * type: integer
   */
  id: number | string;
  /**
   *
   *
   *
   */
  display_name: string;
  /**
   *
   *
   * format: date-time
   */
  created_at: string;
  /**
   *
   *
   * format: date-time
   */
  updated_at: string;
};
