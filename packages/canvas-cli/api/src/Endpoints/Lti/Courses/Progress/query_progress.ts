import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type query_progressPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
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
  const response = await client().fetchAs<Progress>(
    `/api/lti/courses/{course_id}/progress/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
