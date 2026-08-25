import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Progress } from '../../../../../../Resources/CoursePace.js';
import { RubricAssessment } from '../../../../../../Resources/Rubrics.js';

export type grade_or_comment_on_multiple_submissions_courses_assignmentsPathParameters =
  {
    /**
     * ID
     *
     * type: string
     *
     *
     */
    course_id: string | number;
    /**
     * ID
     *
     * type: string
     *
     *
     */
    assignment_id: string | number;
  };

export type grade_or_comment_on_multiple_submissions_courses_assignmentsSearchParameters =
  Masquerade;

export type grade_or_comment_on_multiple_submissions_courses_assignmentsFormParameters =
  Masquerade & {
    /**
     * See documentation for the posted_grade argument in the
{api:SubmissionsApiController#update Submissions Update} documentation
     *
     * 
     *
     * 
     */
    'grade_data[<student_id>][posted_grade]': string;
    /**
     * See documentation for the excuse argument in the
{api:SubmissionsApiController#update Submissions Update} documentation
     *
     * type: boolean
     *
     * 
     */
    'grade_data[<student_id>][excuse]': boolean | string;
    /**
     * See documentation for the rubric_assessment argument in the
{api:SubmissionsApiController#update Submissions Update} documentation
     *
     * 
     *
     * 
     */
    'grade_data[<student_id>][rubric_assessment]': RubricAssessment;
    /**
     * no description
     *
     *
     *
     *
     */
    'grade_data[<student_id>][text_comment]': string;
    /**
     * no description
     *
     * type: boolean
     *
     *
     */
    'grade_data[<student_id>][group_comment]': boolean | string;
    /**
     * no description
     *
     *
     *
     *
     */
    'grade_data[<student_id>][media_comment_id]': string;
    /**
     * no description
     *
     *
     *
     *
     */
    'grade_data[<student_id>][media_comment_type]': string;
    /**
     * See documentation for the comment[] arguments in the
{api:SubmissionsApiController#update Submissions Update} documentation
     *
     * 

format: 'int64'
     *
     * 
     */
    'grade_data[<student_id>][file_ids]': number | string[];
    /**
     * Specifies which assignment to grade.  This argument is not necessary when
using the assignment-specific endpoints.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    'grade_data[<assignment_id>][<student_id>]': number | string;
  };

type Options = (
  | {
      path: grade_or_comment_on_multiple_submissions_courses_assignmentsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: grade_or_comment_on_multiple_submissions_courses_assignmentsPathParameters;
    }
) &
  (
    | {
        query?: Partial<grade_or_comment_on_multiple_submissions_courses_assignmentsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<grade_or_comment_on_multiple_submissions_courses_assignmentsSearchParameters>;
        body?: Partial<grade_or_comment_on_multiple_submissions_courses_assignmentsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<grade_or_comment_on_multiple_submissions_courses_assignmentsFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: grade_or_comment_on_multiple_submissions_courses_assignmentsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: grade_or_comment_on_multiple_submissions_courses_assignmentsSearchParameters;
          }
      ) &
        (
          | {
              body: grade_or_comment_on_multiple_submissions_courses_assignmentsFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: grade_or_comment_on_multiple_submissions_courses_assignmentsFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Grade or comment on multiple submissions
 *
 * Update the grading and comments on multiple student's assignment
submissions in an asynchronous job.

The user must have permission to manage grades in the appropriate context
(course or section).
 *
 * nickname: grade_or_comment_on_multiple_submissions_courses_assignments
 *
 * 
 *
 * 
 */
export async function grade_or_comment_on_multiple_submissions_courses_assignments(
  options: Options
) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/update_grades`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
