import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by assignment
 *
 * List grade change events for a given assignment.
 *
 * Nickname: query_by_assignment
 */
export async function query_by_assignment({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/audit/grade_change/assignments/{assignment_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
