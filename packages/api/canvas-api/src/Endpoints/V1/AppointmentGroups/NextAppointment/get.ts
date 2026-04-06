import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { CalendarEvent } from '../../../../Resources/CalendarEvents.js';

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** List of ids of appointment groups to search. */
    appointment_group_ids: string[];
  }>;

type Options =
  | {
      query?: Partial<getSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<getSearchParameters>;
      /** @deprecated Use {Options.query} */
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
