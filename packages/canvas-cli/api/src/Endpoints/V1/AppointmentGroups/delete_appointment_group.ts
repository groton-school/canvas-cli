import { client } from '../../../Client.js';

export type delete_appointment_groupPathParameters = {
  /** ID */
  id: string;
};

export type delete_appointment_groupSearchParameters = {
  /** Reason for deleting/canceling the appointment group. */
  cancel_reason: string;
};

type Options = {
  pathParams: delete_appointment_groupPathParameters;
  searchParams?: delete_appointment_groupSearchParameters;
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
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups/{id}`, {
    method: 'DELETE',
    pathParams,
    searchParams
  });
}
