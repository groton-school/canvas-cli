import { client } from '../../../../../Client.js';
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
export async function query_by_student({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/audit/grade_change/students/{student_id}`,
    { method: 'GET', params: parameters }
  );
}
