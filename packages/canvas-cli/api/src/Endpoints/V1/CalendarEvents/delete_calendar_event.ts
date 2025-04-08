import { client } from '../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a calendar event
 *
 * Delete an event from the calendar and return the deleted event
 *
 * Nickname: delete_calendar_event
 */
export async function delete_calendar_event({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/calendar_events/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
