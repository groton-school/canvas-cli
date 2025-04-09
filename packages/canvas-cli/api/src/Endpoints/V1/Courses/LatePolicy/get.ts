import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a late policy
 *
 * Returns the late policy for a course.
 *
 * Nickname: get_late_policy
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{id}/late_policy`, {
    method: 'GET',
    pathParams
  });
}
