import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Progress } from '../../../Resources/CoursePace.js';

export type query_progressPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type query_progressSearchParameters = Masquerade;

type Options = {
  pathParams: query_progressPathParameters;
} & (
  | {
      searchParams?: Partial<query_progressSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_progressSearchParameters;
      strict: true;
    }
);

/**
 * Query progress
 *
 * Return completion and status information about an asynchronous job
 *
 * Nickname: query_progress
 */
export async function query_progress(options: Options) {
  const response = await client().fetchAs<Progress>(`/api/v1/progress/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
