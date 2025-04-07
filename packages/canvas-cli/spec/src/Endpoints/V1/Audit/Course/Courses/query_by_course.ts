import { CourseEvent } from '../../../../../Resources/CourseAuditLog.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query by course.
 *
 * List course change events for a given course.
 *
 * Nickname: query_by_course
 */
export async function query_by_course({
  parameters
}: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/audit/course/courses/{course_id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
