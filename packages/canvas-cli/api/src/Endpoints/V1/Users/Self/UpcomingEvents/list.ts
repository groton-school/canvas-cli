import { client } from '../../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * List upcoming assignments, calendar events
 *
 * A paginated list of the current user's upcoming events.
 *
 * Nickname: list_upcoming_assignments_calendar_events
 */
export async function list({}: Options) {
  return await client().fetchAs<void>(`/v1/users/self/upcoming_events`, {
    method: 'GET'
  });
}
