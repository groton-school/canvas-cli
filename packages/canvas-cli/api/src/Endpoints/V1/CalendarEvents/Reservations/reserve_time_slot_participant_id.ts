import { client } from '../../../../Client.js';

export type reserve_time_slot_participant_idPathParameters = {
  /** ID */
  id: string;
  /**
   * User or group id for whom you are making the reservation (depends on the
   * participant type). Defaults to the current user (or user's candidate
   * group).
   */
  participant_id: string;
};

export type reserve_time_slot_participant_idFormParameters = {
  /** Comments to associate with this reservation */
  comments: string;
  /**
   * Defaults to false. If true, cancel any previous reservation(s) for this
   * participant and appointment group.
   */
  cancel_existing: boolean;
};

type Options = {
  pathParams: reserve_time_slot_participant_idPathParameters;
  params?: reserve_time_slot_participant_idFormParameters;
};

/**
 * Reserve a time slot
 *
 * Reserves a particular time slot and return the new reservation
 *
 * Nickname: reserve_time_slot_participant_id
 */
export async function reserve_time_slot_participant_id({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/calendar_events/{id}/reservations/{participant_id}`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
