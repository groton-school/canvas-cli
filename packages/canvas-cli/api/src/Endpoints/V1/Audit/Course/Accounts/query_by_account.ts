import { client } from '../../../../../Client.js';
import { CourseEvent } from '../../../../../Resources/CourseAuditLog.js';

export type query_by_accountPathParameters = {
  /** ID */
  account_id: string;
};

export type query_by_accountSearchParameters = {
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
};

type Options = {
  pathParams: query_by_accountPathParameters;
  searchParams?: query_by_accountSearchParameters;
};

/**
 * Query by account.
 *
 * List course change events for a given account.
 *
 * Nickname: query_by_account
 */
export async function query_by_account({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/audit/course/accounts/{account_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
