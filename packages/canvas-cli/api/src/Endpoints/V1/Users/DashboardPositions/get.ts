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
 * Get dashboard positions
 *
 * Returns all dashboard positions that have been saved for a user.
 *
 * Nickname: get_dashboard_positions
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/users/{id}/dashboard_positions`,
    {
      method: 'GET',
      ...options
    }
  );
}
