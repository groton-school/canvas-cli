import { Masquerade } from '@groton/canvas-cli.client.base';
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

export type reserve_time_slot_participant_idSearchParameters = Masquerade;

export type reserve_time_slot_participant_idFormParameters = Masquerade & {
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
} & (
  | {
      searchParams?: Partial<reserve_time_slot_participant_idSearchParameters>;
      params?: Partial<reserve_time_slot_participant_idFormParameters>;
      strict?: false;
    }
  | {
      searchParams: reserve_time_slot_participant_idSearchParameters;
      params: reserve_time_slot_participant_idFormParameters;
      strict: true;
    }
);

/**
 * Reserve a time slot
 *
 * Reserves a particular time slot and return the new reservation
 *
 * Nickname: reserve_time_slot_participant_id
 */
export async function reserve_time_slot_participant_id(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/calendar_events/{id}/reservations/{participant_id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
