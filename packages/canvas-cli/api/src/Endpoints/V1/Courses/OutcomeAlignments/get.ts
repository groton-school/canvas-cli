import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { OutcomeAlignment } from '../../../../Resources/OutcomeResults.js';

export type getPathParameters = {
  /**
   * The id of the course
   *
   * Format: 'int64'
   */
  course_id: number;
};

export type getSearchParameters = {
  /**
   * The id of the student
   *
   * Format: 'int64'
   */
  student_id: number;
} & Paginated;

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
  return await client().fetchAs<OutcomeAlignment[]>(
    `/api/v1/courses/{course_id}/outcome_alignments`,
    {
      method: 'GET',
      ...options
    }
  );
}
