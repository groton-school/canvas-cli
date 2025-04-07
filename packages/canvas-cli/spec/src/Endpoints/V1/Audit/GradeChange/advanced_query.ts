import { GradeChangeEvent } from '../../../../Resources/GradeChangeLog.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function advanced_query({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/audit/grade_change`, { method: 'GET', body: parameters })
  ).json();
}
