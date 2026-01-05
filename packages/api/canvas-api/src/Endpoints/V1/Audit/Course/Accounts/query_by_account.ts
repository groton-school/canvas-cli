import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { CourseEvent } from '../../../../../Resources/CourseAuditLog.js';

export type query_by_accountPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type query_by_accountSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The beginning of the time range from which you want events.
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

type Options = {
  pathParams: query_by_accountPathParameters;
} & (
  | {
      searchParams?: Partial<query_by_accountSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_accountSearchParameters;
      strict: true;
    }
);

/**
 * Query by account.
 *
 * List course change events for a given account.
 *
 * Nickname: query_by_account
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
