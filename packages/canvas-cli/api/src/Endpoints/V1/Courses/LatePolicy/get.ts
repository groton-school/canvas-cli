import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a late policy
 *
 * Returns the late policy for a course.
 *
 * Nickname: get_late_policy
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{id}/late_policy`, {
    method: 'GET',
    params: parameters
  });
}
