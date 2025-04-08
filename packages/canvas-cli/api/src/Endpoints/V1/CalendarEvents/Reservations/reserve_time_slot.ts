import { client } from '../../../../Client.js';

type Parameters = {
  /**
   * User or group id for whom you are making the reservation (depends on the
   * participant type). Defaults to the current user (or user's candidate
   * group).
   */
  participant_id: string;
  /** Comments to associate with this reservation */
  comments: string;
  /**
   * Defaults to false. If true, cancel any previous reservation(s) for this
   * participant and appointment group.
   */
  cancel_existing: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Reserve a time slot
 *
 * Reserves a particular time slot and return the new reservation
 *
 * Nickname: reserve_time_slot
 */
export async function reserve_time_slot({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/calendar_events/{id}/reservations`, {
    method: 'POST',
    params: parameters
  });
}
