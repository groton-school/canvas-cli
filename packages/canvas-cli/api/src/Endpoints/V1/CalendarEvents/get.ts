import { client } from '../../../Client.js';
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
export async function get({ parameters }: Options) {
  return await client().fetchAs<CalendarEvent>(`/v1/calendar_events/{id}`, {
    method: 'GET',
    params: parameters
  });
}
