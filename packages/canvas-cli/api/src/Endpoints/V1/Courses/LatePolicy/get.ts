import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a late policy
 *
 * Returns the late policy for a course.
 *
 * Nickname: get_late_policy
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(`/api/v1/courses/{id}/late_policy`, {
    method: 'GET',
    ...options
  });
}
