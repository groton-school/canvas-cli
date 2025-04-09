import { client } from '../../../Client.js';
import { Progress } from '../../../Resources/CoursePace.js';

export type query_progressPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: query_progressPathParameters;
};

/**
 * Query progress
 *
 * Return completion and status information about an asynchronous job
 *
 * Nickname: query_progress
 */
export async function query_progress({ pathParams }: Options) {
  return await client().fetchAs<Progress>(`/v1/progress/{id}`, {
    method: 'GET',
    pathParams
  });
}
