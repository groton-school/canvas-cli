type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an appointment group
 *
 * Delete an appointment group (and associated time slots and reservations) and
 * return the deleted group
 *
 * Nickname: delete_appointment_group
 */
export async function delete_appointment_group({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/appointment_groups/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
