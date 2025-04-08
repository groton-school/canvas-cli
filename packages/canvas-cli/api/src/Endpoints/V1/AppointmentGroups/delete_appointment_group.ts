import { client } from '../../../Client.js';

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
export async function delete_appointment_group({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
