import { client } from '../../../../../Client.js';

export type query_by_userPathParameters = {
  /** ID */
  user_id: string;
};

export type query_by_userSearchParameters = Partial<{
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

type Options = {
  pathParams: query_by_userPathParameters;
} & (
  | {
      searchParams?: Partial<query_by_userSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: query_by_userSearchParameters;
      strict: true;
    }
);

/**
 * Query by user.
 *
 * List authentication events for a given user.
 *
 * Nickname: query_by_user
 */
export async function query_by_user(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/audit/authentication/users/{user_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
