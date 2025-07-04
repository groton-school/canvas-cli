import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
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
     * The id of the student
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    student_id: number | string;
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
 * Get aligned assignments for an outcome in a course for a particular student
 *
 * Nickname:
 * get_aligned_assignments_for_outcome_in_course_for_particular_student
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
