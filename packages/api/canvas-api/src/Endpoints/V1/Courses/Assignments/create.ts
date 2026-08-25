import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import {
  Assignment,
  AssignmentOverride
} from '../../../../Resources/Assignments.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The assignment name.
   *
   *
   *
   *
   */
  'assignment[name]': string;
  /**
     * The position of this assignment in the group when displaying
assignment lists.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[position]': number | string;
  /**
     * List of supported submission types for the assignment.
Unless the assignment is allowing online submissions, the array should
only have one element.

If not allowing online submissions, your options are:
  &quot;online_quiz&quot;
  &quot;none&quot;
  &quot;on_paper&quot;
  &quot;discussion_topic&quot;
  &quot;external_tool&quot;

If you are allowing online submissions, you can have one or many
allowed submission types:

  &quot;online_upload&quot;
  &quot;online_text_entry&quot;
  &quot;online_url&quot;
  &quot;media_recording&quot; (Only valid when the Kaltura plugin is enabled)
  &quot;student_annotation&quot;
     *
     * 
     *
     * 
     */
  'assignment[submission_types]': string[];
  /**
     * Allowed extensions if submission_types includes &quot;online_upload&quot;

Example:
  allowed_extensions: [&quot;docx&quot;,&quot;ppt&quot;]
     *
     * 
     *
     * 
     */
  'assignment[allowed_extensions]': string[];
  /**
     * Only applies when the Turnitin plugin is enabled for a course and
the submission_types array includes &quot;online_upload&quot;.
Toggles Turnitin submissions for the assignment.
Will be ignored if Turnitin is not available for the course.
     *
     * type: boolean
     *
     * 
     */
  'assignment[turnitin_enabled]': boolean | string;
  /**
     * Only applies when the VeriCite plugin is enabled for a course and
the submission_types array includes &quot;online_upload&quot;.
Toggles VeriCite submissions for the assignment.
Will be ignored if VeriCite is not available for the course.
     *
     * type: boolean
     *
     * 
     */
  'assignment[vericite_enabled]': boolean | string;
  /**
     * Settings to send along to turnitin. See Assignment object definition for
format.
     *
     * 
     *
     * 
     */
  'assignment[turnitin_settings]': string;
  /**
   * Data used for SIS integrations. Requires admin-level token with the &quot;Manage SIS&quot; permission. JSON string required.
   *
   *
   *
   *
   */
  'assignment[integration_data]': string;
  /**
   * Unique ID from third party integrations
   *
   *
   *
   *
   */
  'assignment[integration_id]': string;
  /**
     * If submission_types does not include external_tool,discussion_topic,
online_quiz, or on_paper, determines whether or not peer reviews
will be turned on for the assignment.
     *
     * type: boolean
     *
     * 
     */
  'assignment[peer_reviews]': boolean | string;
  /**
     * Whether peer reviews will be assigned automatically by Canvas or if
teachers must manually assign peer reviews. Does not apply if peer reviews
are not enabled.
     *
     * type: boolean
     *
     * 
     */
  'assignment[automatic_peer_reviews]': boolean | string;
  /**
     * If true, Canvas will send a notification to students in the class
notifying them that the content has changed.
     *
     * type: boolean
     *
     * 
     */
  'assignment[notify_of_update]': boolean | string;
  /**
     * If present, the assignment will become a group assignment assigned
to the group.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[group_category_id]': number | string;
  /**
     * If this is a group assignment, teachers have the options to grade
students individually. If false, Canvas will apply the assignment&#x27;s
score to each member of the group. If true, the teacher can manually
assign scores to each member of the group.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[grade_group_students_individually]': number | string;
  /**
     * Hash of external tool parameters if submission_types is [&quot;external_tool&quot;].
See Assignment object definition for format.
     *
     * 
     *
     * 
     */
  'assignment[external_tool_tag_attributes]': string;
  /**
     * The maximum points possible on the assignment.
     *
     * type: number

format: 'float'
     *
     * 
     */
  'assignment[points_possible]': number | string;
  /**
     * The strategy used for grading the assignment.
The assignment defaults to &quot;points&quot; if this field is omitted.
     *
     * 
     *
     * 
     */
  'assignment[grading_type]': string;
  /**
     * The day/time the assignment is due. Must be between the lock dates if there are lock dates.
Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.
     *
     * format: date-time
     *
     * 
     */
  'assignment[due_at]': string;
  /**
     * The day/time the assignment is locked after. Must be after the due date if there is a due date.
Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.
     *
     * format: date-time
     *
     * 
     */
  'assignment[lock_at]': string;
  /**
     * The day/time the assignment is unlocked. Must be before the due date if there is a due date.
Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.
     *
     * format: date-time
     *
     * 
     */
  'assignment[unlock_at]': string;
  /**
   * The assignment&#x27;s description, supports HTML.
   *
   *
   *
   *
   */
  'assignment[description]': string;
  /**
     * The assignment group id to put the assignment in.
Defaults to the top assignment group in the course.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[assignment_group_id]': number | string;
  /**
   * List of overrides for the assignment.
   *
   *
   *
   *
   */
  'assignment[assignment_overrides]': AssignmentOverride[];
  /**
     * Whether this assignment is only visible to overrides
(Only useful if &#x27;differentiated assignments&#x27; account setting is on)
     *
     * type: boolean
     *
     * 
     */
  'assignment[only_visible_to_overrides]': boolean | string;
  /**
     * Whether this assignment is published.
(Only useful if &#x27;draft state&#x27; account setting is on)
Unpublished assignments are not visible to students.
     *
     * type: boolean
     *
     * 
     */
  'assignment[published]': boolean | string;
  /**
     * The grading standard id to set for the course.  If no value is provided for this argument the current grading_standard will be un-set from this course.
This will update the grading_type for the course to &#x27;letter_grade&#x27; unless it is already &#x27;gpa_scale&#x27;.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[grading_standard_id]': number | string;
  /**
   * Whether this assignment is counted towards a student&#x27;s final grade.
   *
   * type: boolean
   *
   *
   */
  'assignment[omit_from_final_grade]': boolean | string;
  /**
   * Whether this assignment is shown in the gradebook.
   *
   * type: boolean
   *
   *
   */
  'assignment[hide_in_gradebook]': boolean | string;
  /**
     * Whether this assignment should use the Quizzes 2 LTI tool. Sets the
submission type to &#x27;external_tool&#x27; and configures the external tool
attributes to use the Quizzes 2 LTI tool configured for this course.
Has no effect if no Quizzes 2 LTI tool is configured.
     *
     * type: boolean
     *
     * 
     */
  'assignment[quiz_lti]': boolean | string;
  /**
   * Whether this assignment is moderated.
   *
   * type: boolean
   *
   *
   */
  'assignment[moderated_grading]': boolean | string;
  /**
     * The maximum number of provisional graders who may issue grades for this
assignment. Only relevant for moderated assignments. Must be a positive
value, and must be set to 1 if the course has fewer than two active
instructors. Otherwise, the maximum value is the number of active
instructors in the course minus one, or 10 if the course has more than 11
active instructors.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[grader_count]': number | string;
  /**
     * The user ID of the grader responsible for choosing final grades for this
assignment. Only relevant for moderated assignments.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[final_grader_id]': number | string;
  /**
     * Boolean indicating if provisional graders&#x27; comments are visible to other
provisional graders. Only relevant for moderated assignments.
     *
     * type: boolean
     *
     * 
     */
  'assignment[grader_comments_visible_to_graders]': boolean | string;
  /**
     * Boolean indicating if provisional graders&#x27; identities are hidden from
other provisional graders. Only relevant for moderated assignments.
     *
     * type: boolean
     *
     * 
     */
  'assignment[graders_anonymous_to_graders]': boolean | string;
  /**
     * Boolean indicating if provisional grader identities are visible to the
the final grader. Only relevant for moderated assignments.
     *
     * type: boolean
     *
     * 
     */
  'assignment[graders_names_visible_to_final_grader]': boolean | string;
  /**
     * Boolean indicating if the assignment is graded anonymously. If true,
graders cannot see student identities.
     *
     * type: boolean
     *
     * 
     */
  'assignment[anonymous_grading]': boolean | string;
  /**
     * The number of submission attempts allowed for this assignment. Set to -1 for unlimited attempts.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[allowed_attempts]': number | string;
  /**
     * The Attachment ID of the document being annotated.

Only applies when submission_types includes &quot;student_annotation&quot;.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'assignment[annotatable_attachment_id]': number | string;
  /**
     * Document processors for this assignment. New document processors can only be added
via the interactive LTI Deep Linking flow (in a browser), not via API token or JWT authentication.
Deletion of document processors (passing an empty array) is allowed via API.
     *
     * 
     *
     * 
     */
  'assignment[asset_processors]': string[];
  /**
     * The maximum points possible for peer reviews.
     *
     * type: number

format: 'float'
     *
     * 
     */
  'assignment[peer_review][points_possible]': number | string;
  /**
     * The strategy used for grading peer reviews.
Defaults to &quot;points&quot; if this field is omitted.
     *
     * 
     *
     * 
     */
  'assignment[peer_review][grading_type]': string;
  /**
     * The day/time the peer reviews are due. Must be between the lock dates if there are lock dates.
Accepts times in ISO 8601 format, e.g. 2025-08-20T12:10:00Z.
     *
     * format: date-time
     *
     * 
     */
  'assignment[peer_review][due_at]': string;
  /**
     * The day/time the peer reviews are locked after. Must be after the due date if there is a due date.
Accepts times in ISO 8601 format, e.g. 2025-08-25T12:10:00Z.
     *
     * format: date-time
     *
     * 
     */
  'assignment[peer_review][lock_at]': string;
  /**
     * The day/time the peer reviews are unlocked. Must be before the due date if there is a due date.
Accepts times in ISO 8601 format, e.g. 2025-08-15T12:10:00Z.
     *
     * format: date-time
     *
     * 
     */
  'assignment[peer_review][unlock_at]': string;
  /**
   * List of overrides for the peer reviews.
   *
   *
   *
   *
   */
  'assignment[peer_review][peer_review_overrides]': AssignmentOverride[];
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create an assignment
 *
 * Create a new assignment for this course. The assignment is created in the
active state.
 *
 * nickname: create_assignment
 *
 * 
 *
 * 
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Assignment>(
    `/api/v1/courses/{course_id}/assignments`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
