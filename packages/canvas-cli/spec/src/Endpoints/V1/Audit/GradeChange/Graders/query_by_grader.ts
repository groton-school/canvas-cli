import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by grader
 *
 * List grade change events for a given grader.
 *
 * Nickname: query_by_grader
 */
export async function query_by_grader({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/audit/grade_change/graders/{grader_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
