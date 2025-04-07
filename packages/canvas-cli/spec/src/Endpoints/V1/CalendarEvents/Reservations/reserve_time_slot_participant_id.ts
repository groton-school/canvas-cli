type Parameters = {
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
 * Nickname: reserve_time_slot_participant_id
 */
export async function reserve_time_slot_participant_id({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/calendar_events/{id}/reservations/{participant_id}`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
