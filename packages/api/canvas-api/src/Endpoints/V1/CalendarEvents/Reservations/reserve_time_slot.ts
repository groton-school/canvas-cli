import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type reserve_time_slotPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type reserve_time_slotSearchParameters = Masquerade;

export type reserve_time_slotFormParameters = Masquerade & {
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
   *
   * Type: boolean
   */
  cancel_existing: boolean | string;
};

type Options = (
  | {
      path: reserve_time_slotPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: reserve_time_slotPathParameters;
    }
) &
  (
    | {
        query?: Partial<reserve_time_slotSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<reserve_time_slotSearchParameters>;
        body?: Partial<reserve_time_slotFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<reserve_time_slotFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<reserve_time_slotSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: reserve_time_slotSearchParameters;
        body?: Partial<reserve_time_slotFormParameters>;
        /** @deprecated Use {@link Options.body} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/calendar_events/{id}/reservations`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
