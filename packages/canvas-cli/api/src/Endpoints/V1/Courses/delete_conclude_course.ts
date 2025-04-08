import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete/Conclude a course
 *
 * Delete or conclude an existing course
 *
 * Nickname: delete_conclude_course
 */
export async function delete_conclude_course({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
