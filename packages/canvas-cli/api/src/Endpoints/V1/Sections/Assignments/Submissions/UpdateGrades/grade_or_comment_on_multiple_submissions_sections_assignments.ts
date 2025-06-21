import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { Progress } from '../../../../../../Resources/CoursePace.js';
import { RubricAssessment } from '../../../../../../Resources/Rubrics.js';

export type grade_or_comment_on_multiple_submissions_sections_assignmentsPathParameters =
  {
    /** ID */
    section_id: string;
    /** ID */
    assignment_id: string;
  };

export type grade_or_comment_on_multiple_submissions_sections_assignmentsSearchParameters =
  Masquerade;

export type grade_or_comment_on_multiple_submissions_sections_assignmentsFormParameters =
  Masquerade & {
    /**
     * See documentation for the posted_grade argument in the
     * {api:SubmissionsApiController#update Submissions Update} documentation
     */
    'grade_data[<student_id>][posted_grade]': string;
    /**
     * See documentation for the excuse argument in the
     * {api:SubmissionsApiController#update Submissions Update} documentation
     */
    'grade_data[<student_id>][excuse]': boolean;
    /**
     * See documentation for the rubric_assessment argument in the
     * {api:SubmissionsApiController#update Submissions Update} documentation
     */
    'grade_data[<student_id>][rubric_assessment]': RubricAssessment;
    /** No description */
    'grade_data[<student_id>][text_comment]': string;
    /** No description */
    'grade_data[<student_id>][group_comment]': boolean;
    /** No description */
    'grade_data[<student_id>][media_comment_id]': string;
    /** No description */
    'grade_data[<student_id>][media_comment_type]': string;
    /**
     * See documentation for the comment[] arguments in the
     * {api:SubmissionsApiController#update Submissions Update} documentation
     *
     * Format: 'int64'
     */
    'grade_data[<student_id>][file_ids]': number[];
    /**
     * Specifies which assignment to grade. This argument is not necessary when
     * using the assignment-specific endpoints.
     *
     * Format: 'int64'
     */
    'grade_data[<assignment_id>][<student_id>]': number;
  };

type Options = {
  pathParams: grade_or_comment_on_multiple_submissions_sections_assignmentsPathParameters;
} & (
  | {
      searchParams?: Partial<grade_or_comment_on_multiple_submissions_sections_assignmentsSearchParameters>;
      params?: Partial<grade_or_comment_on_multiple_submissions_sections_assignmentsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: grade_or_comment_on_multiple_submissions_sections_assignmentsSearchParameters;
      params: grade_or_comment_on_multiple_submissions_sections_assignmentsFormParameters;
      strict: true;
    }
);

/**
 * Grade or comment on multiple submissions
 *
 * Update the grading and comments on multiple student's assignment submissions
 * in an asynchronous job.
 *
 * The user must have permission to manage grades in the appropriate context
 * (course or section).
 *
 * Nickname: grade_or_comment_on_multiple_submissions_sections_assignments
 */
export async function grade_or_comment_on_multiple_submissions_sections_assignments(
  options: Options
) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/update_grades`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
