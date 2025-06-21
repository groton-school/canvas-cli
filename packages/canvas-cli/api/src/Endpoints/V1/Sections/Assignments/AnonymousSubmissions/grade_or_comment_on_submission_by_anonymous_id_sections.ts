import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { RubricAssessment } from '../../../../../Resources/Rubrics.js';

export type grade_or_comment_on_submission_by_anonymous_id_sectionsPathParameters =
  {
    /** ID */
    section_id: string;
    /** ID */
    assignment_id: string;
    /** ID */
    anonymous_id: string;
  };

export type grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters =
  Masquerade;

export type grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters =
  Masquerade & {
    /** Add a textual comment to the submission. */
    'comment[text_comment]': string;
    /**
     * Whether or not this comment should be sent to the entire group (defaults
     * to false). Ignored if this is not a group assignment or if no
     * text_comment is provided.
     */
    'comment[group_comment]': boolean;
    /**
     * Add an audio/video comment to the submission. Media comments can be added
     * via this API, however, note that there is not yet an API to generate or
     * list existing media comments, so this functionality is currently of
     * limited use.
     */
    'comment[media_comment_id]': string;
    /** The type of media comment being added. */
    'comment[media_comment_type]': string;
    /**
     * Attach files to this comment that were previously uploaded using the
     * Submission Comment API's files action
     *
     * Format: 'int64'
     */
    'comment[file_ids]': number[];
    /** Whether this assignment is visible to the owner of the submission */
    'include[visibility]': string;
    /**
     * Assign a score to the submission, updating both the "score" and "grade"
     * fields on the submission record. This parameter can be passed in a few
     * different formats:
     *
     * Points:: A floating point or integral value, such as "13.5". The grade
     * will be interpreted directly as the score of the assignment. Values above
     * assignment.points_possible are allowed, for awarding extra credit.
     * percentage:: A floating point value appended with a percent sign, such as
     * "40%". The grade will be interpreted as a percentage score on the
     * assignment, where 100% == assignment.points_possible. Values above 100%
     * are allowed, for awarding extra credit. letter grade:: A letter grade,
     * following the assignment's defined letter grading scheme. For example,
     * "A-". The resulting score will be the high end of the defined range for
     * the letter grade. For instance, if "B" is defined as 86% to 84%, a letter
     * grade of "B" will be worth 86%. The letter grade will be rejected if the
     * assignment does not have a defined letter grading scheme. For more
     * fine-grained control of scores, pass in points or percentage rather than
     * the letter grade. "pass/complete/fail/incomplete":: A string value of
     * "pass" or "complete" will give a score of 100%. "fail" or "incomplete"
     * will give a score of 0.
     *
     * Note that assignments with grading_type of "pass_fail" can only be
     * assigned a score of 0 or assignment.points_possible, nothing inbetween.
     * If a posted_grade in the "points" or "percentage" format is sent, the
     * grade will only be accepted if the grade equals one of those two values.
     */
    'submission[posted_grade]': string;
    /** Sets the "excused" status of an assignment. */
    'submission[excuse]': boolean;
    /**
     * Sets the late policy status to either "late", "missing", "extended",
     * "none", or null. NB: "extended" values can only be set in the UI when the
     * "UI features for 'extended' Submissions" Account Feature is on
     */
    'submission[late_policy_status]': string;
    /**
     * Sets the seconds late if late policy status is "late"
     *
     * Format: 'int64'
     */
    'submission[seconds_late_override]': number;
    /**
     * Assign a rubric assessment to this assignment submission. The
     * sub-parameters here depend on the rubric for the assignment. The general
     * format is, for each row in the rubric:
     *
     * The points awarded for this row. rubric_assessment[criterion_id][points]
     *
     * The rating id for the row. rubric_assessment[criterion_id][rating_id]
     *
     * Comments to add for this row. rubric_assessment[criterion_id][comments]
     *
     * For example, if the assignment rubric is (in JSON format): !!!javascript
     * [ { 'id': 'crit1', 'points': 10, 'description': 'Criterion 1', 'ratings':
     * [ { 'id': 'rat1', 'description': 'Good', 'points': 10 }, { 'id': 'rat2',
     * 'description': 'Poor', 'points': 3 } ] }, { 'id': 'crit2', 'points': 5,
     * 'description': 'Criterion 2', 'ratings': [ { 'id': 'rat1', 'description':
     * 'Exemplary', 'points': 5 }, { 'id': 'rat2', 'description': 'Complete',
     * 'points': 5 }, { 'id': 'rat3', 'description': 'Incomplete', 'points': 0 }
     * ] } ]
     *
     * Then a possible set of values for rubric_assessment would be:
     * rubric_assessment[crit1][points]=3&rubric_assessment[crit1][rating_id]=rat1&rubric_assessment[crit2][points]=5&rubric_assessment[crit2][rating_id]=rat2&rubric_assessment[crit2][comments]=Well%20Done.
     */
    rubric_assessment: RubricAssessment;
  };

type Options = {
  pathParams: grade_or_comment_on_submission_by_anonymous_id_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters>;
      params?: Partial<grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: grade_or_comment_on_submission_by_anonymous_id_sectionsSearchParameters;
      params: grade_or_comment_on_submission_by_anonymous_id_sectionsFormParameters;
      strict: true;
    }
);

/**
 * Grade or comment on a submission by anonymous id
 *
 * Comment on and/or update the grading for a student's assignment submission,
 * fetching the submission by anonymous id (instead of user id). If any
 * submission or rubric_assessment arguments are provided, the user must have
 * permission to manage grades in the appropriate context (course or section).
 *
 * Nickname: grade_or_comment_on_submission_by_anonymous_id_sections
 */
export async function grade_or_comment_on_submission_by_anonymous_id_sections(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/anonymous_submissions/{anonymous_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
