import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{id}/late_policy`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
