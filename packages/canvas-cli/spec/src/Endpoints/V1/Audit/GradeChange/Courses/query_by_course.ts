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
export async function query_by_course({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/audit/grade_change/courses/{course_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
