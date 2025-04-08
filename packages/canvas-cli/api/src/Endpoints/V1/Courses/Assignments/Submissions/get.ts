import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single submission
 *
 * Get a single submission, based on user id.
 *
 * Nickname: get_single_submission_courses
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}`,
    { method: 'GET', params: parameters }
  );
}
