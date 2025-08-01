import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { Progress } from '../../../../../../Resources/CoursePace.js';
import { RubricAssessment } from '../../../../../../Resources/Rubrics.js';

export type grade_or_comment_on_multiple_submissions_sections_assignmentsPathParameters =
  {
    /**
     * ID
     *
     * Type: string
     */
    section_id: string | number;
    /**
     * ID
     *
     * Type: string
     */
    assignment_id: string | number;
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
     *
     * Type: boolean
     */
    'grade_data[<student_id>][excuse]': boolean | string;
    /**
     * See documentation for the rubric_assessment argument in the
     * {api:SubmissionsApiController#update Submissions Update} documentation
     */
    'grade_data[<student_id>][rubric_assessment]': RubricAssessment;
    /** No description */
    'grade_data[<student_id>][text_comment]': string;
    /**
     * No description
     *
     * Type: boolean
     */
    'grade_data[<student_id>][group_comment]': boolean | string;
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
    'grade_data[<student_id>][file_ids]': number | string[];
    /**
     * Specifies which assignment to grade. This argument is not necessary when
     * using the assignment-specific endpoints.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    'grade_data[<assignment_id>][<student_id>]': number | string;
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
