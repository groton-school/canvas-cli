type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Group activity stream summary
 *
 * Returns a summary of the current user's group-specific activity stream.
 *
 * For full documentation, see the API documentation for the user activity
 * stream summary, in the user api.
 *
 * Nickname: group_activity_stream_summary
 */
export async function group_activity_stream_summary({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/groups/{group_id}/activity_stream/summary`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
