import {
  DateString,
  DateTimeString,
  HTMLString,
  URLString,
  UUIDString
} from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import { canvas, stringify } from './Client.js';
import * as Courses from './Courses.js';
import { isError } from './Error.js';
import { url } from './URL.js';

type ExternalToolTagAttributes = {
  /** URL to the external tool */
  url: URLString;
  /** Whether or not there is a new tab for the external tool */
  new_tab: boolean;
  /** the identifier for this tool_tag */
  resource_link_id: string;
};

export type LockInfo = {
  /** Asset string for the object causing the lock */
  asset_string: string;
  /** (Optional) Time at which this was/will be unlocked. Must be before the due
   * date. */
  unlock_at?: DateTimeString;
  /** (Optional) Time at which this was/will be locked. Must be after the due date. */
  lock_at?: DateTimeString;
  /** (Optional) Context module causing the lock. */
  context_module?: any;
  manually_locked: boolean;
};

type RubricRating = {
  points: number;
  id: string;
  description: string;
  long_description: string;
};

type RubricCriteria = {
  points: number;
  /** The id of rubric criteria. */
  id: string;
  /** (Optional) The id of the learning outcome this criteria uses, if any. */
  learning_outcome_id?: string;
  /** (Optional) The 3rd party vendor's GUID for the outcome this criteria
   * references, if any. */
  vendor_guid?: UUIDString;
  description: string;
  long_description: string;
  criterion_use_range: boolean;
  ratings: boolean;
  ignore_for_scoring: boolean;
};

/** Object representing a due date for an assignment or quiz. If the due date
 * came from an assignment override, it will have an 'id' field. */
type AssignmentDate = {
  /** (Optional, missing if 'base' is present) id of the assignment override this
   * date represents */
  id?: number;
  /** (Optional, present if 'id' is missing) whether this date represents the
   * assignment's or quiz's default due date */
  base?: boolean;
  title: string;
  /** The due date for the assignment. Must be between the unlock date and the lock
   * date if there are lock dates */
  due_at: DateTimeString;
  /** The unlock date for the assignment. Must be before the due date if there is a
   * due date. */
  unlock_at: DateTimeString;
  /** The lock date for the assignment. Must be after the due date if there is a
   * due date. */
  lock_at: DateTimeString;
};

type TurnitinSettings = {
  originality_report_visibility: string;
  s_paper_check: boolean;
  internet_check: boolean;
  journal_check: boolean;
  exclude_biblio: boolean;
  exclude_quoted: boolean;
  exclude_small_matches_type: string;
  exclude_small_matches_value: number;
};

type NeedsGradingCount = {
  /** The section ID */
  section_id: string;
  /** Number of submissions that need grading */
  needs_grading_count: number;
};

type ScoreStatistic = {
  /** Min score */
  min: number;
  /** Max score */
  max: number;
  /** Mean score */
  mean: number;
  /** Upper quartile score */
  upper_q: number;
  /** Median score */
  median: number;
  /** Lower quartile score */
  lower_q: number;
};

type BasicUser = {
  /** The user's ID */
  id: string;
  /** The user's name */
  name: string;
};

export type AssignmentOverride = {
  /** the ID of the assignment override */
  id: number;
  /** the ID of the assignment the override applies to (present if the override
   * applies to an assignment) */
  assignment_id?: number;
  /** the ID of the quiz the override applies to (present if the override applies
   * to a quiz) */
  quiz_id?: number;
  /** the ID of the module the override applies to (present if the override applies
   * to a module) */
  context_module_id?: number;
  /** the ID of the discussion the override applies to (present if the override
   * applies to an ungraded discussion) */
  discussion_topic_id?: number;
  /** the ID of the page the override applies to (present if the override applies
   * to a page) */
  wiki_page_id?: number;
  /** the ID of the file the override applies to (present if the override applies
   * to a file) */
  attachment_id?: number;
  /** the IDs of the override's target students (present if the override targets an
   * ad-hoc set of students) */
  student_ids?: number[];
  /** the ID of the override's target group (present if the override targets a
   * group and the assignment is a group assignment) */
  group_id?: number;
  /** the ID of the overrides's target section (present if the override targets a
   * section) */
  course_section_id?: number;
  /** the title of the override */
  title: string;
  /** the overridden due at (present if due_at is overridden) */
  due_at?: DateTimeString;
  /** the overridden all day flag (present if due_at is overridden) */
  all_day?: boolean;
  /** the overridden all day date (present if due_at is overridden) */
  all_day_date?: DateString;
  /** the overridden unlock at (present if unlock_at is overridden) */
  unlock_at?: DateTimeString;
  /** the overridden lock at, if any (present if lock_at is overridden) */
  lock_at?: DateTimeString;
};

export type Model = {
  /** the ID of the assignment */
  id: number;
  /** the name of the assignment */
  name: string;
  /** the assignment description, in an HTML fragment */
  description: HTMLString;
  /** The time at which this assignment was originally created */
  created_at: DateTimeString;
  /** The time at which this assignment was last modified in any way */
  updated_at: DateTimeString;
  /** the due date for the assignment. returns null if not present. NOTE: If this
   *  assignment has assignment overrides, this field will be the due date as it
   *  applies to the user requesting information from the API. */
  due_at: DateTimeString | null;
  /** the lock date (assignment is locked after this date). returns null if not
   *  present. NOTE: If this assignment has assignment overrides, this field will
   *  be the lock date as it applies to the user requesting information from the
   *  API. */
  lock_at: DateTimeString | null;
  /** the unlock date (assignment is unlocked after this date) returns null if not
   *  present NOTE: If this assignment has assignment overrides, this field will be
   *  the unlock date as it applies to the user requesting information from the
   *  API. */
  unlock_at: DateTimeString | null;
  /** whether this assignment has overrides */
  has_overrides: boolean;
  /** (Optional) all dates associated with the assignment, if applicable */
  all_dates?: AssignmentDate[];
  /** the ID of the course the assignment belongs to */
  course_id: number;
  /** the URL to the assignment's web page */
  html_url: URLString;
  /** the URL to download all submissions as a zip */
  submissions_download_url: URLString;
  /** the ID of the assignment's group */
  assignment_group_id: number;
  /** Boolean flag indicating whether the assignment requires a due date based on
   *  the account level setting */
  due_date_required: boolean;
  /** Allowed file extensions, which take effect if submission_types includes
   *  'online_upload'. */
  allowed_extensions: string[];
  /** An integer indicating the maximum length an assignment's name may be */
  max_name_length: number;
  /** Boolean flag indicating whether or not Turnitin has been enabled for the
   *  assignment. NOTE: This flag will not appear unless your account has the
   *  Turnitin plugin available */
  turnitin_enabled: boolean;
  /** Boolean flag indicating whether or not VeriCite has been enabled for the
   *  assignment. NOTE: This flag will not appear unless your account has the
   *  VeriCite plugin available */
  vericite_enabled: boolean;
  /** Settings to pass along to turnitin to control what kinds of matches should be
   *  considered. originality_report_visibility can be 'immediate',
   *  'after_grading', 'after_due_date', or 'never' exclude_small_matches_type can
   *  be null, 'percent', 'words' exclude_small_matches_value: - if type is null,
   *  this will be null also - if type is 'percent', this will be a number between
   *  0 and 100 representing match size to exclude as a percentage of the document
   *  size. - if type is 'words', this will be number > 0 representing how many
   *  words a match must contain for it to be considered NOTE: This flag will not
   *  appear unless your account has the Turnitin plugin available */
  turnitin_settings: TurnitinSettings;
  /** If this is a group assignment, boolean flag indicating whether or not
   *  students will be graded individually. */
  grade_group_students_individually: boolean;
  /** (Optional) assignment's settings for external tools if submission_types
   *  include 'external_tool'. Only url and new_tab are included (new_tab defaults
   *  to false).  Use the 'External Tools' API if you need more information about
   *  an external tool. */
  external_tool_tag_attributes: ExternalToolTagAttributes;
  /** Boolean indicating if peer reviews are required for this assignment */
  peer_reviews: boolean;
  /** Boolean indicating peer reviews are assigned automatically. If false, the
   *  teacher is expected to manually assign peer reviews. */
  automatic_peer_reviews: boolean;
  /** Integer representing the amount of reviews each user is assigned. NOTE: This
   *  key is NOT present unless you have automatic_peer_reviews set to true. */
  peer_review_count: number;
  /** String representing a date the reviews are due by. Must be a date that occurs
   *  after the default due date. If blank, or date is not after the assignment's
   *  due date, the assignment's due date will be used. NOTE: This key is NOT
   *  present unless you have automatic_peer_reviews set to true. */
  peer_reviews_assign_at: DateTimeString;
  /** Boolean representing whether or not members from within the same group on a
   *  group assignment can be assigned to peer review their own group's work */
  intra_group_peer_reviews: boolean;
  /** The ID of the assignment’s group set, if this is a group assignment. For
   *  group discussions, set group_category_id on the discussion topic, not the
   *  linked assignment. */
  group_category_id: number;
  /** if the requesting user has grading rights, the number of submissions that
   *  need grading. */
  needs_grading_count: number;
  /** if the requesting user has grading rights and the
   *  'needs_grading_count_by_section' flag is specified, the number of submissions
   *  that need grading split out by section. NOTE: This key is NOT present unless
   *  you pass the 'needs_grading_count_by_section' argument as true.  ANOTHER
   *  NOTE: it's possible to be enrolled in multiple sections, and if a student is
   *  setup that way they will show an assignment that needs grading in multiple
   *  sections (effectively the count will be duplicated between sections) */
  needs_grading_count_by_section: NeedsGradingCount[];
  /** the sorting order of the assignment in the group */
  position: number;
  /** (optional, present if Sync Grades to SIS feature is enabled) */
  post_to_sis?: boolean;
  /** (optional, Third Party unique identifier for Assignment) */
  integration_id?: string;
  /** (optional, Third Party integration data for assignment) */
  integration_data?: object;
  /** the maximum points possible for the assignment */
  points_possible: number;
  /** the types of submissions allowed for this assignment list containing one or
   *  more of the following: 'discussion_topic', 'online_quiz', 'on_paper', 'none',
   *  'external_tool', 'online_text_entry', 'online_url', 'online_upload',
   *  'media_recording', 'student_annotation' */
  submission_types: (
    | 'discussion_topic'
    | 'online_quiz'
    | 'on_paper'
    | 'none'
    | 'external_tool'
    | 'online_text_entry'
    | 'online_url'
    | 'online_upload'
    | 'media_recording'
    | 'student_annotation'
  )[];
  /** If true, the assignment has been submitted to by at least one student */
  has_submitted_submissions: boolean;
  /** The type of grading the assignment receives; one of 'pass_fail', 'percent',
   *  'letter_grade', 'gpa_scale', 'points' */
  grading_type:
    | 'pass_fail'
    | 'percent'
    | 'letter_grade'
    | 'gpa_scale'
    | 'points';
  /** The id of the grading standard being applied to this assignment. Valid if
   *  grading_type is 'letter_grade' or 'gpa_scale'. */
  grading_standard_id: number | null;
  /** Whether the assignment is published */
  published: boolean;
  /** Whether the assignment's 'published' state can be changed to false. Will be
   *  false if there are student submissions for the assignment. */
  unpublishable: boolean;
  /** Whether the assignment is only visible to overrides. */
  only_visible_to_overrides: boolean;
  /** Whether or not this is locked for the user. */
  locked_for_user: boolean;
  /** (Optional) Information for the user about the lock. Present when
   *  locked_for_user is true. */
  lock_info?: LockInfo;
  /** (Optional) An explanation of why this is locked for the user. Present when
   *  locked_for_user is true. */
  lock_explanation?: string;
  /** (Optional) id of the associated quiz (applies only when submission_types is
   *  ['online_quiz']) */
  quiz_id?: number;
  /** (Optional) whether anonymous submissions are accepted (applies only to quiz
   *  assignments) */
  anonymous_submissions?: number;
  /** (Optional) the DiscussionTopic associated with the assignment, if applicable */
  discussion_topic?: any;
  /** (Optional) Boolean indicating if assignment will be frozen when it is copied.
   *  NOTE: This field will only be present if the AssignmentFreezer plugin is
   *  available for your account. */
  freeze_on_copy?: boolean;
  /** (Optional) Boolean indicating if assignment is frozen for the calling user.
   *  NOTE: This field will only be present if the AssignmentFreezer plugin is
   *  available for your account. */
  frozen?: boolean;
  /** (Optional) Array of frozen attributes for the assignment. Only account
   *  administrators currently have permission to change an attribute in this list.
   *  Will be empty if no attributes are frozen for this assignment. Possible
   *  frozen attributes are: title, description, lock_at, points_possible,
   *  grading_type, submission_types, assignment_group_id, allowed_extensions,
   *  group_category_id, notify_of_update, peer_reviews NOTE: This field will only
   *  be present if the AssignmentFreezer plugin is available for your account. */
  frozen_attributes?: string[];
  /** (Optional) If 'submission' is included in the 'include' parameter, includes a
   *  Submission object that represents the current user's (user who is requesting
   *  information from the api) current submission for the assignment. See the
   *  Submissions API for an example response. If the user does not have a
   *  submission, this key will be absent. */
  submission?: any;
  /** (Optional) If true, the rubric is directly tied to grading the assignment.
   *  Otherwise, it is only advisory. Included if there is an associated rubric. */
  use_rubric_for_grading?: boolean;
  /** (Optional) An object describing the basic attributes of the rubric, including
   *  the point total. Included if there is an associated rubric. */
  rubric_settings?: any;
  /** (Optional) A list of scoring criteria and ratings for each rubric criterion.
   *  Included if there is an associated rubric. */
  rubric?: any;
  /** (Optional) If 'assignment_visibility' is included in the 'include' parameter,
   *  includes an array of student IDs who can see this assignment. */
  assignment_visibility?: number[];
  /** (Optional) If 'overrides' is included in the 'include' parameter, includes an
   *  array of assignment override objects. */
  overrides?: AssignmentOverride[];
  /** (Optional) If true, the assignment will be omitted from the student's final
   *  grade */
  omit_from_final_grade?: boolean;
  /** (Optional) If true, the assignment will not be shown in any gradebooks */
  hide_in_gradebook?: boolean;
  /** Boolean indicating if the assignment is moderated. */
  moderated_grading?: boolean;
  /** The maximum number of provisional graders who may issue grades for this
   *  assignment. Only relevant for moderated assignments. Must be a positive
   *  value, and must be set to 1 if the course has fewer than two active
   *  instructors. Otherwise, the maximum value is the number of active instructors
   *  in the course minus one, or 10 if the course has more than 11 active
   *  instructors. */
  grader_count: number;
  /** The user ID of the grader responsible for choosing final grades for this
   *  assignment. Only relevant for moderated assignments. */
  final_grader_id: number;
  /** Boolean indicating if provisional graders' comments are visible to other
   *  provisional graders. Only relevant for moderated assignments. */
  grader_comments_visible_to_graders: boolean;
  /** Boolean indicating if provisional graders' identities are hidden from other
   *  provisional graders. Only relevant for moderated assignments with
   *  grader_comments_visible_to_graders set to true. */
  graders_anonymous_to_graders: boolean;
  /** Boolean indicating if provisional grader identities are visible to the final
   *  grader. Only relevant for moderated assignments. */
  grader_names_visible_to_final_grader: boolean;
  /** Boolean indicating if the assignment is graded anonymously. If true, graders
   *  cannot see student identities. */
  anonymous_grading: boolean;
  /** The number of submission attempts a student can make for this assignment. -1
   *  is considered unlimited. */
  allowed_attempts: number;
  /** Whether the assignment has manual posting enabled. Only relevant for courses
   *  using New Gradebook. */
  post_manually?: boolean;
  /** (Optional) If 'score_statistics' and 'submission' are included in the
   *  'include' parameter and statistics are available, includes the min, max, and
   *  mode for this assignment */
  score_statistics?: ScoreStatistic;
  /** (Optional) If retrieving a single assignment and 'can_submit' is included in
   *  the 'include' parameter, flags whether user has the right to submit the
   *  assignment (i.e. checks enrollment dates, submission types, locked status,
   *  attempts remaining, etc...). Including 'can submit' automatically includes
   *  'submission' in the include parameter. Not available when observed_users are
   *  included. */
  can_submit?: boolean;
  /** (Optional) The academic benchmark(s) associated with the assignment or the
   *  assignment's rubric. Only included if 'ab_guid' is included in the 'include'
   *  parameter. */
  ab_guid: string[];
  /** The id of the attachment to be annotated by students. Relevant only if
   *  submission_types includes 'student_annotation'. */
  annotatable_attachment_id?: number;
  /** (Optional) Boolean indicating whether student names are anonymized */
  anonymize_students?: boolean;
  /** (Optional) Boolean indicating whether the Respondus LockDown Browser® is
   *  required for this assignment. */
  require_lockdown_browser?: boolean;
  /** (Optional) Boolean indicating whether this assignment has important dates. */
  important_dates?: boolean;
  /** (Optional, Deprecated) Boolean indicating whether notifications are muted for
   *  this assignment. */
  muted?: boolean;
  /** Boolean indicating whether peer reviews are anonymous. */
  anonymous_peer_reviews: boolean;
  /** Boolean indicating whether instructor anotations are anonymous. */
  anonymous_instructor_annotations: boolean;
  /** Boolean indicating whether this assignment has graded submissions. */
  graded_submissions_exist: boolean;
  /** Boolean indicating whether this is a quiz lti assignment. */
  is_quiz_assignment: boolean;
  /** Boolean indicating whether this assignment is in a closed grading period. */
  in_closed_grading_period: boolean;
  /** Boolean indicating whether this assignment can be duplicated. */
  can_duplicate: boolean;
  /** If this assignment is a duplicate, it is the original assignment's course_id */
  original_course_id: number;
  /** If this assignment is a duplicate, it is the original assignment's id */
  original_assignment_id: number;
  /** If this assignment is a duplicate, it is the original assignment's
   *  lti_resource_link_id */
  original_lti_resource_link_id: number;
  /** If this assignment is a duplicate, it is the original assignment's name */
  original_assignment_name: string;
  /** If this assignment is a duplicate, it is the original assignment's quiz_id */
  original_quiz_id: number;
  /** String indicating what state this assignment is in. */
  workflow_state: string;
};

export type Parameters = {
  /** The assignment name. */
  'assignment[name]': string;
  /** The position of this assignment in the group when displaying assignment lists. */
  'assignment[position]'?: number;
  /** List of supported submission types for the assignment. Unless the assignment is allowing online submissions, the array should only have one element.

    If not allowing online submissions, your options are:

    "online_quiz"
    "none"
    "on_paper"
    "discussion_topic"
    "external_tool"


    If you are allowing online submissions, you can have one or many allowed submission types:

    "online_upload"
    "online_text_entry"
    "online_url"
    "media_recording" (Only valid when the Kaltura plugin is enabled)
    "student_annotation"


    Allowed values:
    online_quiz, none, on_paper, discussion_topic, external_tool, online_upload, online_text_entry, online_url, media_recording, student_annotation */
  'assignment[submission_types]'?: (
    | 'online_quiz'
    | 'none'
    | 'on_paper'
    | 'discussion_topic'
    | 'external_tool'
    | 'online_upload'
    | 'online_text_entry'
    | 'online_url'
    | 'media_recording'
    | 'student_annotation'
  )[];
  /** Allowed extensions if submission_types includes “online_upload”

    Example:

    allowed_extensions: ["docx","ppt"]
     */
  'assignment[allowed_extensions]'?: string[];
  /** Only applies when the Turnitin plugin is enabled for a course and the submission_types array includes “online_upload”. Toggles Turnitin submissions for the assignment. Will be ignored if Turnitin is not available for the course. */
  'assignment[turnitin_enabled]'?: boolean;
  /** Only applies when the VeriCite plugin is enabled for a course and the submission_types array includes “online_upload”. Toggles VeriCite submissions for the assignment. Will be ignored if VeriCite is not available for the course. */
  'assignment[vericite_enabled]'?: boolean;
  /** Settings to send along to turnitin. See Assignment object definition for format. */
  'assignment[turnitin_settings]'?: string;
  /** Data used for SIS integrations. Requires admin-level token with the “Manage SIS” permission. JSON string required. */
  'assignment[integration_data]'?: string;
  /** Unique ID from third party integrations */
  'assignment[integration_id]'?: string;
  /** If submission_types does not include external_tool,discussion_topic, online_quiz, or on_paper, determines whether or not peer reviews will be turned on for the assignment. */
  'assignment[peer_reviews]'?: boolean;
  /** Whether peer reviews will be assigned automatically by Canvas or if teachers must manually assign peer reviews. Does not apply if peer reviews are not enabled. */
  'assignment[automatic_peer_reviews]'?: boolean;
  /** If true, Canvas will send a notification to students in the class notifying them that the content has changed. */
  'assignment[notify_of_update]'?: boolean;
  /** If present, the assignment will become a group assignment assigned to the group. */
  'assignment[group_category_id]'?: number;
  /** If this is a group assignment, teachers have the options to grade students individually. If false, Canvas will apply the assignment’s score to each member of the group. If true, the teacher can manually assign scores to each member of the group. */
  'assignment[grade_group_students_individually]'?: number;
  /** Hash of external tool parameters if submission_types is [“external_tool”]. See Assignment object definition for format. */
  'assignment[external_tool_tag_attributes]'?: string;
  /** The maximum points possible on the assignment. */
  'assignment[points_possible]'?: number;
  /** The strategy used for grading the assignment. The assignment defaults to “points” if this field is omitted.

    Allowed values:
    pass_fail, percent, letter_grade, gpa_scale, points, not_graded */
  'assignment[grading_type]'?: string;
  /** The day/time the assignment is due. Must be between the lock dates if there are lock dates. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. */
  'assignment[due_at]'?: DateTimeString;
  /** The day/time the assignment is locked after. Must be after the due date if there is a due date. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. */
  'assignment[lock_at]'?: DateTimeString;
  /** The day/time the assignment is unlocked. Must be before the due date if there is a due date. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. */
  'assignment[unlock_at]'?: DateTimeString;
  /** The assignment’s description, supports HTML. */
  'assignment[description]'?: string;
  /** The assignment group id to put the assignment in. Defaults to the top assignment group in the course. */
  'assignment[assignment_group_id]'?: number;
  /** List of overrides for the assignment. */
  'assignment[assignment_overrides]'?: AssignmentOverride[];
  /** Whether this assignment is only visible to overrides (Only useful if ‘differentiated assignments’ account setting is on) */
  'assignment[only_visible_to_overrides]'?: boolean;
  /** Whether this assignment is published. (Only useful if ‘draft state’ account setting is on) Unpublished assignments are not visible to students. */
  'assignment[published]'?: boolean;
  /** The grading standard id to set for the course. If no value is provided for this argument the current grading_standard will be un-set from this course. This will update the grading_type for the course to ‘letter_grade’ unless it is already ‘gpa_scale’. */
  'assignment[grading_standard_id]'?: number;
  /** Whether this assignment is counted towards a student’s final grade. */
  'assignment[omit_from_final_grade]'?: boolean;
  /** Whether this assignment is shown in the gradebook. */
  'assignment[hide_in_gradebook]'?: boolean;
  /** Whether this assignment should use the Quizzes 2 LTI tool. Sets the submission type to ‘external_tool’ and configures the external tool attributes to use the Quizzes 2 LTI tool configured for this course. Has no effect if no Quizzes 2 LTI tool is configured. */
  'assignment[quiz_lti]'?: boolean;
  /** Whether this assignment is moderated. */
  'assignment[moderated_grading]'?: boolean;
  /** The maximum number of provisional graders who may issue grades for this assignment. Only relevant for moderated assignments. Must be a positive value, and must be set to 1 if the course has fewer than two active instructors. Otherwise, the maximum value is the number of active instructors in the course minus one, or 10 if the course has more than 11 active instructors. */
  'assignment[grader_count]'?: number;
  /** The user ID of the grader responsible for choosing final grades for this assignment. Only relevant for moderated assignments. */
  'assignment[final_grader_id]'?: number;
  /** Boolean indicating if provisional graders’ comments are visible to other provisional graders. Only relevant for moderated assignments. */
  'assignment[grader_comments_visible_to_graders]'?: boolean;
  /** Boolean indicating if provisional graders’ identities are hidden from other provisional graders. Only relevant for moderated assignments. */
  'assignment[graders_anonymous_to_graders]'?: boolean;
  /** Boolean indicating if provisional grader identities are visible to the the final grader. Only relevant for moderated assignments. */
  'assignment[graders_names_visible_to_final_grader]'?: boolean;
  /** Boolean indicating if the assignment is graded anonymously. If true, graders cannot see student identities. */
  'assignment[anonymous_grading]'?: boolean;
  /** The number of submission attempts allowed for this assignment. Set to -1 for unlimited attempts. */
  'assignment[allowed_attempts]'?: number;
  /** The Attachment ID of the document being annotated.

    Only applies when submission_types includes “student_annotation”. */
  'assignment[annotatable_attachment_id]'?: number;
};

type CreateOptions = {
  course: Courses.Model;
  args: Parameters;
};
export async function create({ course, args }: CreateOptions) {
  const spinner = ora(
    `Creating assignment ${Colors.value(args['assignment[name]'])}`
  ).start();

  const result = (await canvas().fetch(
    `/api/v1/courses/${course.id}/assignments`,
    { method: 'POST', body: new URLSearchParams(stringify(args)) }
  )) as Model;
  if (isError(result)) {
    spinner.fail(
      `Error creating assignment ${Colors.value(args['assignment[name]'])}`
    );
    throw new Error(
      `Error creating assigment: ${Log.syntaxColor({
        ...Courses.basic(course),
        args: stringify(args),
        error: result
      })}`
    );
  }

  spinner.succeed(
    `Created assignment ${Colors.value(result.name)} at ${Colors.url(url(`/courses/${course.id}/assignments/${result.id}`))}`
  );
  return result;
}

type UpdateParameters = Partial<Omit<Parameters, 'assignment[quiz_lti]'>> & {
  'assignment[sis_assignment_id]'?: string;
  /** Data used for SIS integrations. Requires admin-level token with the “Manage SIS” permission. JSON string required. */
  /** If true, updated_at will be set even if no changes were made. */
  'assignment[force_updated_at]'?: boolean;
};

type UpdateOptions = {
  course: Courses.Model;
  assignment: Model;
  args: UpdateParameters;
};

export async function update({ course, assignment, args }: UpdateOptions) {
  const spinner = ora(
    `Updating assignment ${Colors.value(assignment.name || assignment.id)}`
  ).start();
  const result = (await canvas().fetch(
    `/api/v1/courses/${course.id}/assignments/${assignment.id}`,
    { method: 'PUT', body: new URLSearchParams(stringify(args)) }
  )) as Model;
  if (isError(result)) {
    spinner.fail(
      `Error updating assignment ${Colors.value(assignment.name || assignment.id)}`
    );
    throw new Error(
      `Error updating assignment: ${Log.syntaxColor({
        ...Courses.basic(course),
        assignment,
        args: stringify(args),
        error: result
      })}`
    );
  }
  spinner.succeed(`Updated assignment ${Colors.value(result.name)}`);
  return result;
}
