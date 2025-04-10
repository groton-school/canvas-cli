import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { GradeChangeEvent } from '../../../../Resources/GradeChangeLog.js';

export type advanced_querySearchParameters = {
  /**
   * Restrict query to events in the specified course.
   *
   * Format: 'int64'
   */
  course_id: number;
  /**
   * Restrict query to the given assignment. If "override" is given, query the
   * course final grade override instead.
   *
   * Format: 'int64'
   */
  assignment_id: number;
  /**
   * User id of a student to search grading events for.
   *
   * Format: 'int64'
   */
  student_id: number;
  /**
   * User id of a grader to search grading events for.
   *
   * Format: 'int64'
   */
  grader_id: number;
  /**
   * The beginning of the time range from which you want events.
   *
   * Format: date-time
   */
  start_time: string;
  /**
   * The end of the time range from which you want events.
   *
   * Format: date-time
   */
  end_time: string;
} & Paginated;

type Options =
  | {
      searchParams?: Partial<advanced_querySearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: advanced_querySearchParameters;
      strict: true;
    };

/**
 * Advanced query
 *
 * List grade change events satisfying all given parameters. Teachers may query
 * for events in courses they teach. Queries without +course_id+ require account
 * administrator rights.
 *
 * At least one of +course_id+, +assignment_id+, +student_id+, or +grader_id+
 * must be specified.
 *
 * Nickname: advanced_query
 */
export async function advanced_query({ searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/audit/grade_change`, {
    method: 'GET',
    searchParams
  });
}
