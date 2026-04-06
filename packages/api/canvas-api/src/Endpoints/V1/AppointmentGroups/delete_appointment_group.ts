import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_appointment_groupPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_appointment_groupSearchParameters = Masquerade &
  Partial<{
    /** Reason for deleting/canceling the appointment group. */
    cancel_reason: string;
  }>;

type Options = (
  | {
      path: delete_appointment_groupPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_appointment_groupPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_appointment_groupSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_appointment_groupSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<delete_appointment_groupSearchParameters>;
        /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/appointment_groups/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
