import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List all courses
 *
 * A paginated list of all courses visible in the public index
 *
 * Nickname: list_all_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/search/all_courses`, {
    method: 'GET',
    params: parameters
  });
}
