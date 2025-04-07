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
export async function group_activity_stream({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/activity_stream`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
