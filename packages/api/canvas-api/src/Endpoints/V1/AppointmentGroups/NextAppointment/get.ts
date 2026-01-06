import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { CalendarEvent } from '../../../../Resources/CalendarEvents.js';

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** List of ids of appointment groups to search. */
    appointment_group_ids: string[];
  }>;

type Options =
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    };

/**
 * Get next appointment
 *
 * Return the next appointment available to sign up for. The appointment is
 * returned in a one-element array. If no future appointments are available, an
 * empty array is returned.
 *
 * Nickname: get_next_appointment
 */
export async function get(options: Options) {
  const response = await client().fetchAs<CalendarEvent[]>(
    `/api/v1/appointment_groups/next_appointment`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
