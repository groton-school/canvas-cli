import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  term_id: string | number;
};

export type getSearchParameters = Masquerade;

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
 * Get department-level grade data
 *
 * Returns the distribution of grades for students in courses in the department.
 * Each data point is one student's current grade in one course; if a student is
 * in multiple courses, he contributes one value per course, but if he's
 * enrolled multiple times in the same course (e.g. a lecture section and a lab
 * section), he only constributes on value for that course.
 *
 * Grades are binned to the nearest integer score; anomalous grades outside the
 * 0 to 100 range are ignored. The raw counts are returned, not yet normalized
 * by the total count.
 *
 * Shares the same variations on endpoint as the participation data.
 *
 * Nickname: get_department_level_grade_data_terms
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/analytics/terms/{term_id}/grades`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
