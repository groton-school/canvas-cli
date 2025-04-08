import { client } from '../../../../Client.js';
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
export async function delete_course_pace({ parameters }: Options) {
  return await client().fetchAs<CoursePace>(
    `/v1/courses/{course_id}/course_pacing/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
