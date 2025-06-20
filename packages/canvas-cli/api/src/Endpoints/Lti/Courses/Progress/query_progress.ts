import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type query_progressPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: query_progressPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
