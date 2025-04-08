import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get quota information
 *
 * Returns the total and used storage quota for the course, group, or user.
 *
 * Nickname: get_quota_information_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/files/quota`, {
    method: 'GET',
    params: parameters
  });
}
