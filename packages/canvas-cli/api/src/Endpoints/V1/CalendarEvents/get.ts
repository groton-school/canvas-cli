import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { CalendarEvent } from '../../../Resources/CalendarEvents.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single calendar event or assignment
 *
 * Nickname: get_single_calendar_event_or_assignment
 */
export async function get(options: Options) {
  const response = await client().fetchAs<CalendarEvent>(
    `/api/v1/calendar_events/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
