import { client } from '../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = Partial<{
  /**
   * Array of additional information to include. See include[] argument of
   * "List appointment groups" action.
   *
   * "child_events":: reservations of time slots time slots "appointments"::
   * will always be returned "all_context_codes":: all context codes
   * associated with this appointment group
   */
  include: string[];
}>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a single appointment group
 *
 * Returns information for a single appointment group
 *
 * Nickname: get_single_appointment_group
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/appointment_groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
