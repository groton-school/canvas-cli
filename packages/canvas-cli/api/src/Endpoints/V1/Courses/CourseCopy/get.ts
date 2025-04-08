import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get course copy status
 *
 * DEPRECATED: Please use the {api:ContentMigrationsController#create Content
 * Migrations API}
 *
 * Retrieve the status of a course copy
 *
 * Nickname: get_course_copy_status
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/course_copy/{id}`,
    { method: 'GET', params: parameters }
  );
}
