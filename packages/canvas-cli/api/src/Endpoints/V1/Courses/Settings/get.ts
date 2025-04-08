import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get course settings
 *
 * Returns some of a course's settings.
 *
 * Nickname: get_course_settings
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/settings`, {
    method: 'GET',
    params: parameters
  });
}
