import { client } from '../../../Client.js';
import { CalendarEvent } from '../../../Resources/CalendarEvents.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List calendar events
 *
 * Retrieve the paginated list of calendar events or assignments for the current
 * user
 *
 * Nickname: list_calendar_events
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/calendar_events`, {
    method: 'GET',
    params: parameters
  });
}
