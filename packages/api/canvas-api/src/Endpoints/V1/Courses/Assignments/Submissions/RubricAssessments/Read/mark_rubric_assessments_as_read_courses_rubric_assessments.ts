import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../../Client.js';

export type mark_rubric_assessments_as_read_courses_rubric_assessmentsPathParameters =
  {
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
    assignment_id: string | number;
    /**
     * ID
     *
     * Type: string
     */
    user_id: string | number;
  };

export type mark_rubric_assessments_as_read_courses_rubric_assessmentsSearchParameters =
  Masquerade;

type Options = {
  pathParams: mark_rubric_assessments_as_read_courses_rubric_assessmentsPathParameters;
} & (
  | {
      searchParams?: Partial<mark_rubric_assessments_as_read_courses_rubric_assessmentsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_rubric_assessments_as_read_courses_rubric_assessmentsSearchParameters;
      strict: true;
    }
);

/**
 * Mark rubric assessments as read
 *
 * Indicate that rubric comments/grading made on a submission have been read by
 * the student being assessed. Only the student who owns the submission can use
 * this endpoint.
 *
 * NOTE: Rubric assessments will be marked as read automatically when they are
 * viewed in Canvas web.
 *
 * Nickname: mark_rubric_assessments_as_read_courses_rubric_assessments
 */
export async function mark_rubric_assessments_as_read_courses_rubric_assessments(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_assessments/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
