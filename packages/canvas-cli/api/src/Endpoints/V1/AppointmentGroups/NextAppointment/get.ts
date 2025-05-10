import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { CalendarEvent } from '../../../../Resources/CalendarEvents.js';

export type getSearchParameters = Partial<{
  /** List of ids of appointment groups to search. */
  appointment_group_ids: string[];
}> &
  Paginated;

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
  return await client().fetchAs<CalendarEvent[]>(
    `/api/v1/appointment_groups/next_appointment`,
    {
      method: 'GET',
      ...options
    }
  );
}
