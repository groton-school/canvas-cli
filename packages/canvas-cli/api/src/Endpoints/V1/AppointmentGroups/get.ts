import { client } from '../../../Client.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /**
   * Array of additional information to include. See include[] argument of
   * "List appointment groups" action.
   *
   * "child_events":: reservations of time slots time slots "appointments"::
   * will always be returned "all_context_codes":: all context codes
   * associated with this appointment group
   */
  include: string[];
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get a single appointment group
 *
 * Returns information for a single appointment group
 *
 * Nickname: get_single_appointment_group
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/appointment_groups/{id}`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
