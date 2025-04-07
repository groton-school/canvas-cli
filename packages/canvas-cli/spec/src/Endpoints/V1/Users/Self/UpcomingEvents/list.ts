type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List upcoming assignments, calendar events
 *
 * A paginated list of the current user's upcoming events.
 *
 * Nickname: list_upcoming_assignments_calendar_events
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/users/self/upcoming_events`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
