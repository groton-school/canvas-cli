import { client } from '../../../../Client.js';
import { CalendarEvent } from '../../../../Resources/CalendarEvents.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List calendar events for a user
 *
 * Retrieve the paginated list of calendar events or assignments for the
 * specified user. To view calendar events for a user other than yourself, you
 * must either be an observer of that user or an administrator.
 *
 * Nickname: list_calendar_events_for_user
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/calendar_events`,
    { method: 'GET', params: parameters }
  );
}
