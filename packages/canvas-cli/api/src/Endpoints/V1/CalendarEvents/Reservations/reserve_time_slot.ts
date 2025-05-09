import { client } from '../../../../Client.js';

export type reserve_time_slotPathParameters = {
  /** ID */
  id: string;
};

export type reserve_time_slotFormParameters = {
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
  pathParams: reserve_time_slotPathParameters;
} & (
  | {
      params?: Partial<reserve_time_slotFormParameters>;
      strict?: false;
    }
  | {
      params: reserve_time_slotFormParameters;
      strict: true;
    }
);

/**
 * Reserve a time slot
 *
 * Reserves a particular time slot and return the new reservation
 *
 * Nickname: reserve_time_slot
 */
export async function reserve_time_slot(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/calendar_events/{id}/reservations`,
    {
      method: 'POST',
      ...options
    }
  );
}
