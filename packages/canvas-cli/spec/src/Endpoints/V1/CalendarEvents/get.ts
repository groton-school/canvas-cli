import { CalendarEvent } from '../../../Resources/CalendarEvents.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single calendar event or assignment
 *
 * Nickname: get_single_calendar_event_or_assignment
 */
export async function get({ parameters }: Options): Promise<CalendarEvent> {
  return await (
    await fetch(`/v1/calendar_events/{id}`, { method: 'GET', body: parameters })
  ).json();
}
