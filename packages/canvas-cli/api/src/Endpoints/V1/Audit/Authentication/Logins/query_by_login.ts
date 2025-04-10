import { client } from '../../../../../Client.js';

export type query_by_loginPathParameters = {
  /** ID */
  login_id: string;
};

export type query_by_loginSearchParameters = {
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
};

type Options = {
  pathParams: query_by_loginPathParameters;
} & (
  | {
      searchParams?: Partial<query_by_loginSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_loginSearchParameters;
      strict: true;
    }
);

/**
 * Query by login.
 *
 * List authentication events for a given login.
 *
 * Nickname: query_by_login
 */
export async function query_by_login({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/audit/authentication/logins/{login_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
