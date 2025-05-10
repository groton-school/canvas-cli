import { client } from '../../../Client.js';

export type delete_appointment_groupPathParameters = {
  /** ID */
  id: string;
};

export type delete_appointment_groupSearchParameters = Partial<{
  /** Reason for deleting/canceling the appointment group. */
  cancel_reason: string;
}>;

type Options = {
  pathParams: delete_appointment_groupPathParameters;
} & (
  | {
      searchParams?: Partial<delete_appointment_groupSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_appointment_groupSearchParameters;
      strict: true;
    }
);

/**
 * Delete an appointment group
 *
 * Delete an appointment group (and associated time slots and reservations) and
 * return the deleted group
 *
 * Nickname: delete_appointment_group
 */
export async function delete_appointment_group(options: Options) {
  return await client().fetchAs<void>(`/api/v1/appointment_groups/{id}`, {
    method: 'DELETE',
    ...options
  });
}
