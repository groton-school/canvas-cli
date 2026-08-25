import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Array of additional information to include. See include[] argument of
&quot;List appointment groups&quot; action.

&quot;child_events&quot;:: reservations of time slots time slots
&quot;appointments&quot;:: will always be returned
&quot;all_context_codes&quot;:: all context codes associated with this appointment group
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single appointment group
 *
 * Returns information for a single appointment group
 *
 * nickname: get_single_appointment_group
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/appointment_groups/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
