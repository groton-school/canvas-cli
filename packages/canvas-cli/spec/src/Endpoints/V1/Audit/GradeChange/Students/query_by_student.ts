import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by student
 *
 * List grade change events for a given student.
 *
 * Nickname: query_by_student
 */
export async function query_by_student({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/audit/grade_change/students/{student_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
