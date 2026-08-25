import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { CourseEvent } from '../../../../../Resources/CourseAuditLog.js';

export type query_by_accountPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type query_by_accountSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The beginning of the time range from which you want events.
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
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<query_by_accountSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: query_by_accountSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: query_by_accountSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Query by account.
 *
 * List course change events for a given account.
 *
 * nickname: query_by_account
 *
 *
 *
 *
 */
export async function query_by_account(options: Options) {
  const response = await client().fetchAs<CourseEvent[]>(
    `/api/v1/audit/course/accounts/{account_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
