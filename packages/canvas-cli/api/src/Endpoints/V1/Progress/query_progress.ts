import { client } from '../../../Client.js';
import { Progress } from '../../../Resources/CoursePace.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Query progress
 *
 * Return completion and status information about an asynchronous job
 *
 * Nickname: query_progress
 */
export async function query_progress({ parameters }: Options) {
  return await client().fetchAs<Progress>(`/v1/progress/{id}`, {
    method: 'GET',
    params: parameters
  });
}
