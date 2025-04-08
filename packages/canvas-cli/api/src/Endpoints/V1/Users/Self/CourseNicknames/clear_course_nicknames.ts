import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Clear course nicknames
 *
 * Remove all stored course nicknames.
 *
 * Nickname: clear_course_nicknames
 */
export async function clear_course_nicknames({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/self/course_nicknames`, {
    method: 'DELETE',
    params: parameters
  });
}
