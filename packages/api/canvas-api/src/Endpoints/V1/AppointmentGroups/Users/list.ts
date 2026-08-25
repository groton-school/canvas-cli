import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * Limits results to the a given participation status, defaults to &quot;all&quot;
     *
     *
     *
     *
     */
    registration_status: string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List user participants
 *
 * A paginated list of users that are (or may be) participating in this
appointment group.  Refer to the Users API for the response fields. Returns
no results for appointment groups with the "Group" participant_type.
 *
 * nickname: list_user_participants
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/appointment_groups/{id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
