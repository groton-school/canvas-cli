import { Progress } from '../../../../Resources/CoursePace.js';

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
export async function query_progress({
  parameters
}: Options): Promise<Progress> {
  return await (
    await fetch(`/lti/courses/{course_id}/progress/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
