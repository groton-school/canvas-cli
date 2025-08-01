export type Submission = {
  lti_course_id: string;
  /** Type: integer */
  course_id: number | string;
  /**
   * The submission's assignment id
   *
   * Type: integer
   */
  assignment_id: number | string;
  /**
   * This is the submission attempt number.
   *
   * Type: integer
   */
  attempt: number | string;
  /**
   * The content of the submission, if it was submitted directly in a text
   * field.
   */
  body: string;
  /**
   * The types of submission ex:
   * ('online_text_entry'|'online_url'|'online_upload'|'media_recording'|'student_annotation')
   */
  submission_type: string;
  /**
   * The timestamp when the assignment was submitted
   *
   * Format: date-time
   */
  submitted_at: string;
  /** The URL of the submission (for 'online_url' submissions). */
  url: string;
  /**
   * The id of the user who created the submission
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * UTC timestamp showing when the user agreed to the EULA (if given by the
   * tool provider)
   */
  eula_agreement_timestamp: string;
  /** The current state of the submission */
  workflow_state: string;
  /** Files that are attached to the submission */
  attachments: File;
};

export type File = {
  /** Type: integer */
  size: number | string;
  'content-type': string;
  url: string;
  /** Type: integer */
  id: number | string;
  display_name: string;
  /** Format: date-time */
  created_at: string;
  /** Format: date-time */
  updated_at: string;
};
