import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Group activity stream
 *
 * Returns the current user's group-specific activity stream, paginated.
 *
 * For full documentation, see the API documentation for the user activity
 * stream, in the user api.
 *
 * Nickname: group_activity_stream
 */
export async function group_activity_stream({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/activity_stream`, {
    method: 'GET',
    params: parameters
  });
}
