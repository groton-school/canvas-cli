import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type query_by_userPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
};

export type query_by_userSearchParameters = Masquerade &
  Partial<{
    /**
     * The beginning of the time range from which you want events.
Events are stored for one year.
     *
     * format: date-time
     *
     * 
     */
    start_time: string;
    /**
     * The end of the time range from which you want events.
     *
     * format: date-time
     *
     *
     */
    end_time: string;
  }>;

type Options = (
  | {
      path: query_by_userPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: query_by_userPathParameters;
    }
) &
  (
    | {
        query?: Partial<query_by_userSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<query_by_userSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: query_by_userSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: query_by_userSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Query by user.
 *
 * List authentication events for a given user.
 *
 * nickname: query_by_user
 *
 *
 *
 *
 */
export async function query_by_user(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/audit/authentication/users/{user_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
