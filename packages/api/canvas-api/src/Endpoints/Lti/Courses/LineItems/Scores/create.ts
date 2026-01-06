import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { resultUrlStringTheurltotheresultthatwascreated } from '../../../../../Overrides.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  line_item_id: string | number;
};

export type createSearchParameters = Masquerade & Paginated;

export type createFormParameters = Masquerade & {
  /**
   * The lti_user_id or the Canvas user_id. Returns a 422 if user not found in
   * Canvas or is not a student.
   */
  userId: string;
  /**
   * Indicate to Canvas the status of the user towards the activity's
   * completion. Must be one of Initialized, Started, InProgress, Submitted,
   * Completed.
   */
  activityProgress: string;
  /**
   * Indicate to Canvas the status of the grading process. A value of
   * PendingManual will require intervention by a grader. Values of NotReady,
   * Failed, and Pending will cause the scoreGiven to be ignored. FullyGraded
   * values will require no action. Possible values are NotReady, Failed,
   * Pending, PendingManual, FullyGraded.
   */
  gradingProgress: string;
  /**
   * Date and time when the score was modified in the tool. Should use
   * ISO8601-formatted date with subsecond precision. Returns a 400 if the
   * timestamp is earlier than the updated_at time of the Result.
   */
  timestamp: string;
  /**
   * The Current score received in the tool for this line item and user,
   * scaled to the scoreMaximum
   *
   * Type: number
   */
  scoreGiven: number | string;
  /**
   * Maximum possible score for this result; it must be present if scoreGiven
   * is present. Returns 422 if not present when scoreGiven is present.
   *
   * Type: number
   */
  scoreMaximum: number | string;
  /** Comment visible to the student about this score. */
  comment: string;
  /**
   * Contains metadata about the submission attempt. Supported fields listed
   * below.
   *
   * Object
   */
  submission: JSONObject;
  /**
   * Date and time that the submission was originally created. Should use
   * ISO8601-formatted date with subsecond precision.
   */
  'submission[submittedAt]': string;
  /**
   * (EXTENSION) Optional submission type and data. Fields listed below.
   *
   * Object
   */
  'https://canvas.instructure.com/lti/submission': JSONObject;
  /**
   * (EXTENSION field) flag to indicate that this is a new submission.
   * Defaults to true unless submission_type is none.
   *
   * Type: boolean
   */
  'https://canvas.instructure.com/lti/submission[new_submission]':
    | boolean
    | string;
  /**
   * (EXTENSION field) flag to prevent a request from clearing an existing
   * grade for a submission. Defaults to false.
   *
   * Type: boolean
   */
  'https://canvas.instructure.com/lti/submission[preserve_score]':
    | boolean
    | string;
  /**
   * (EXTENSION field) flag to prevent a request from overwriting an existing
   * grade for a submission. Defaults to false.
   *
   * Type: boolean
   */
  'https://canvas.instructure.com/lti/submission[prioritize_non_tool_grade]':
    | boolean
    | string;
  /**
   * (EXTENSION field) permissible values are: none, basic_lti_launch,
   * online_text_entry, external_tool, online_upload, or online_url. Defaults
   * to external_tool. Ignored if content_items are provided.
   */
  'https://canvas.instructure.com/lti/submission[submission_type]': string;
  /**
   * (EXTENSION field) submission data (URL or body text). Only used for
   * submission_types basic_lti_launch, online_text_entry, online_url. Ignored
   * if content_items are provided.
   */
  'https://canvas.instructure.com/lti/submission[submission_data]': string;
  /**
   * (EXTENSION field) Date and time that the submission was originally
   * created. Should use ISO8601-formatted date with subsecond precision. This
   * should match the date and time that the original submission happened in
   * Canvas. Use of submission.submittedAt is preferred.
   */
  'https://canvas.instructure.com/lti/submission[submitted_at]': string;
  /**
   * (EXTENSION field) Files that should be included with the submission. Each
   * item should contain `type: file`, and a url pointing to the file. It can
   * also contain a title, and an explicit MIME type if needed (otherwise,
   * MIME type will be inferred from the title or url). If any items are
   * present, submission_type will be online_upload.
   *
   * Array
   */
  'https://canvas.instructure.com/lti/submission[content_items]': string[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a Score
 *
 * Create a new Result from the score params. If this is for the first created
 * line_item for a resourceLinkId, or it is a line item that is not attached to
 * a resourceLinkId, then a submission record will be created for the associated
 * assignment when gradingProgress is set to FullyGraded or PendingManual.
 *
 * The submission score will also be updated when a score object is sent with
 * either of those two values for gradingProgress. If a score object is sent
 * with either of FullyGraded or PendingManual as the value for gradingProgress
 * and scoreGiven is missing, the assignment will not be graded. This also
 * supposes the line_item meets the condition to create a submission.
 *
 * A submission comment with an unknown author will be created when the comment
 * value is included. This also supposes the line_item meets the condition to
 * create a submission.
 *
 * It is also possible to submit a file along with this score, which will attach
 * the file to the submission that is created. Files should be formatted as
 * Content Items, with the correct syntax below.
 *
 * Returns a url pointing to the Result. If any files were submitted, also
 * returns the Content Items which were sent in the request, each with a url
 * pointing to the Progress of the file upload.
 *
 * Nickname: create_score
 */
export async function create(options: Options) {
  const response = await client().fetchAs<
    resultUrlStringTheurltotheresultthatwascreated[]
  >(`/api/lti/courses/{course_id}/line_items/{line_item_id}/scores`, {
    method: 'POST',
    ...options
  });
  return response;
}
