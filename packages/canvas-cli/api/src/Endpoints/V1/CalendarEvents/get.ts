import { client } from '../../../Client.js';
import { CalendarEvent } from '../../../Resources/CalendarEvents.js';

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
 * Get a single calendar event or assignment
 *
 * Nickname: get_single_calendar_event_or_assignment
 */
export async function get(options: Options) {
  return await client().fetchAs<CalendarEvent>(`/api/v1/calendar_events/{id}`, {
    method: 'GET',
    ...options
  });
}
