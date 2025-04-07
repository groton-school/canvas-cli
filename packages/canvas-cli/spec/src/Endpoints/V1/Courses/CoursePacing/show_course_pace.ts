import { CoursePace } from '../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show a Course pace
 *
 * Returns a course pace for the course and pace id provided
 *
 * Nickname: show_course_pace
 */
export async function show_course_pace({
  parameters
}: Options): Promise<CoursePace> {
  return await (
    await fetch(`/v1/courses/{course_id}/course_pacing/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
