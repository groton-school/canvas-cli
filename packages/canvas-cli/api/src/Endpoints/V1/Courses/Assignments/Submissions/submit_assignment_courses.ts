import { client } from '../../../../../Client.js';

export type submit_assignment_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type submit_assignment_coursesFormParameters = {
  /** Include a textual comment with the submission. */
  'comment[text_comment]': string;
  /**
   * Whether or not this comment should be sent to the entire group (defaults
   * to false). Ignored if this is not a group assignment or if no
   * text_comment is provided.
   */
  'submission[group_comment]': boolean;
  /**
   * The type of submission being made. The assignment submission_types must
   * include this submission type as an allowed option, or the submission will
   * be rejected with a 400 error.
   *
   * The submission_type given determines which of the following parameters is
   * used. For instance, to submit a URL, submission [submission_type] must be
   * set to "online_url", otherwise the submission [url] parameter will be
   * ignored.
   *
   * "basic_lti_launch" requires the assignment submission_type "online" or
   * "external_tool"
   */
  'submission[submission_type]': string;
  /**
   * Submit the assignment as an HTML document snippet. Note this HTML snippet
   * will be sanitized using the same ruleset as a submission made from the
   * Canvas web UI. The sanitized HTML will be returned in the response as the
   * submission body. Requires a submission_type of "online_text_entry".
   */
  'submission[body]': string;
  /**
   * Submit the assignment as a URL. The URL scheme must be "http" or "https",
   * no "ftp" or other URL schemes are allowed. If no scheme is given (e.g.
   * "www.example.com") then "http" will be assumed. Requires a
   * submission_type of "online_url" or "basic_lti_launch".
   */
  'submission[url]': string;
  /**
   * Submit the assignment as a set of one or more previously uploaded files
   * residing in the submitting user's files section (or the group's files
   * section, for group assignments).
   *
   * To upload a new file to submit, see the submissions
   * {api:SubmissionsApiController#create_file Upload a file API}.
   *
   * Requires a submission_type of "online_upload".
   *
   * Format: 'int64'
   */
  'submission[file_ids]': number[];
  /**
   * The media comment id to submit. Media comment ids can be submitted via
   * this API, however, note that there is not yet an API to generate or list
   * existing media comments, so this functionality is currently of limited
   * use.
   *
   * Requires a submission_type of "media_recording".
   */
  'submission[media_comment_id]': string;
  /** The type of media comment being submitted. */
  'submission[media_comment_type]': string;
  /**
   * Submit on behalf of the given user. Requires grading permission.
   *
   * Format: 'int64'
   */
  'submission[user_id]': number;
  /**
   * The Attachment ID of the document being annotated. This should match the
   * annotatable_attachment_id on the assignment.
   *
   * Requires a submission_type of "student_annotation".
   *
   * Format: 'int64'
   */
  'submission[annotatable_attachment_id]': number;
  /**
   * Choose the time the submission is listed as submitted at. Requires
   * grading permission.
   *
   * Format: date-time
   */
  'submission[submitted_at]': string;
};

type Options = {
  pathParams: submit_assignment_coursesPathParameters;
} & (
  | {
      params?: Partial<submit_assignment_coursesFormParameters>;
      strict?: false;
    }
  | {
      params: submit_assignment_coursesFormParameters;
      strict: true;
    }
);

/**
 * Submit an assignment
 *
 * Make a submission for an assignment. You must be actively enrolled as a
 * student in the course/section to do this. Concluded and pending enrollments
 * are not permitted.
 *
 * All online turn-in submission types are supported in this API. However, there
 * are a few things that are not yet supported:
 *
 * Files can be submitted based on a file ID of a user or group file or through
 * the {api:SubmissionsApiController#create_file file upload API}. However,
 * there is no API yet for listing the user and group files. Media comments can
 * be submitted, however, there is no API yet for creating a media comment to
 * submit. Integration with Google Docs is not yet supported.
 *
 * Nickname: submit_assignment_courses
 */
export async function submit_assignment_courses(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions`,
    {
      method: 'POST',
      ...options
    }
  );
}
