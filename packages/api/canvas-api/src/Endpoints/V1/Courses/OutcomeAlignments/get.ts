import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { OutcomeAlignment } from '../../../../Resources/OutcomeResults.js';

export type getPathParameters = {
  /**
   * The id of the course
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The id of the student. Returns alignments filtered by student
     * submissions. Can be combined with assignment_id to filter to a specific
     * assignment.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    student_id: number | string;
    /**
     * The id of the assignment. When provided without student_id, returns all
     * outcome alignments for the assignment (requires manage_grades or
     * view_all_grades permission). When provided with student_id, filters to
     * that student's submission.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    assignment_id: number | string;
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get outcome alignments for a student or assignment
 *
 * Returns outcome alignments for a student or assignment in a course.
 *
 * Nickname: get_outcome_alignments_for_student_or_assignment
 */
export async function get(options: Options) {
  const response = await client().fetchAs<OutcomeAlignment[]>(
    `/api/v1/courses/{course_id}/outcome_alignments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
