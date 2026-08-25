import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * Defaults to &quot;reservable&quot;
     *
     *
     *
     *
     */
    scope: string;
    /**
     * Array of context codes used to limit returned results.
     *
     *
     *
     *
     */
    context_codes: string[];
    /**
     * Defaults to false. If true, includes past appointment groups
     *
     * type: boolean
     *
     *
     */
    include_past_appointments: boolean | string;
    /**
     * Array of additional information to include.

&quot;appointments&quot;:: calendar event time slots for this appointment group
&quot;child_events&quot;:: reservations of those time slots
&quot;participant_count&quot;:: number of reservations
&quot;reserved_times&quot;:: the event id, start time and end time of reservations
                   the current user has made)
&quot;all_context_codes&quot;:: all context codes associated with this appointment group
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List appointment groups
 *
 * Retrieve the paginated list of appointment groups that can be reserved or
managed by the current user.
 *
 * nickname: list_appointment_groups
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/appointment_groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
