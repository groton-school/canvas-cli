import { client } from '../../../../../Client.js';
import { GradeChangeEvent } from '../../../../../Resources/GradeChangeLog.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by course
 *
 * List grade change events for a given course.
 *
 * Nickname: query_by_course
 */
export async function query_by_course({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/audit/grade_change/courses/{course_id}`,
    { method: 'GET', params: parameters }
  );
}
