import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type query_by_accountPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type query_by_accountSearchParameters = Masquerade &
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
      path: query_by_accountPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: query_by_accountPathParameters;
    }
) &
  (
    | {
        query?: Partial<query_by_accountSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<query_by_accountSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<query_by_accountSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: query_by_accountSearchParameters;
        strict: true;
      }
  );

/**
 * Query by account.
 *
 * List authentication events for a given account.
 *
 * Nickname: query_by_account
 */
export async function query_by_account(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/audit/authentication/accounts/{account_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
