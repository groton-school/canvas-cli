import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
 * Get dashboard positions
 *
 * Returns all dashboard positions that have been saved for a user.
 *
 * Nickname: get_dashboard_positions
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{id}/dashboard_positions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
