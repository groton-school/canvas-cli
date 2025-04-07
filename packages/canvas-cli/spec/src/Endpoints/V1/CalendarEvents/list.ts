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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/calendar_events`, { method: 'GET', body: parameters })
  ).json();
}
