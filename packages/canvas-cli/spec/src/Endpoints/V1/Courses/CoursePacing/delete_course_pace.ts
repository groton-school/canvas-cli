import { CoursePace } from '../../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a Course pace
 *
 * Returns the updated course pace
 *
 * Nickname: delete_course_pace
 */
export async function delete_course_pace({
  parameters
}: Options): Promise<CoursePace> {
  return await (
    await fetch(`/v1/courses/{course_id}/course_pacing/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
