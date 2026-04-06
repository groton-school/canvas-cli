import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type query_by_loginPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  login_id: string | number;
};

export type query_by_loginSearchParameters = Masquerade &
  Partial<{
    /**
     * The beginning of the time range from which you want events. Events are
     * stored for one year.
     *
     * Format: date-time
     */
    start_time: string;
    /**
     * The end of the time range from which you want events.
     *
     * Format: date-time
     */
    end_time: string;
  }>;

type Options = (
  | {
      path: query_by_loginPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: query_by_loginPathParameters;
    }
) &
  (
    | {
        query?: Partial<query_by_loginSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<query_by_loginSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: query_by_loginSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: query_by_loginSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Query by login.
 *
 * List authentication events for a given login.
 *
 * Nickname: query_by_login
 */
export async function query_by_login(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/audit/authentication/logins/{login_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
