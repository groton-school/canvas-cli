import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

type query_progressPathParameters = {
  /** ID */
  course_id: string;
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
  return await client().fetchAs<Progress>(
    `/lti/courses/{course_id}/progress/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
