import { client } from '../../../Client.js';

export type listSearchParameters = {
  /** Defaults to "reservable" */
  scope: string;
  /** Array of context codes used to limit returned results. */
  context_codes: string[];
  /** Defaults to false. If true, includes past appointment groups */
  include_past_appointments: boolean;
  /**
   * Array of additional information to include.
   *
   * "appointments":: calendar event time slots for this appointment group
   * "child_events":: reservations of those time slots "participant_count"::
   * number of reservations "reserved_times":: the event id, start time and
   * end time of reservations the current user has made) "all_context_codes"::
   * all context codes associated with this appointment group
   */
  include: string[];
};

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List appointment groups
 *
 * Retrieve the paginated list of appointment groups that can be reserved or
 * managed by the current user.
 *
 * Nickname: list_appointment_groups
 */
export async function list({ searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups`, {
    method: 'GET',
    searchParams
  });
}
