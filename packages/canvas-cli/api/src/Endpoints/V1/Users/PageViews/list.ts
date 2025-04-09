import { client } from '../../../../Client.js';
import { PageView } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

export type listSearchParameters = {
  /**
   * The beginning of the time range from which you want page views.
   *
   * Format: date-time
   */
  start_time: string;
  /**
   * The end of the time range from which you want page views.
   *
   * Format: date-time
   */
  end_time: string;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List user page views
 *
 * Return a paginated list of the user's page view history in json format,
 * similar to the available CSV download. Page views are returned in descending
 * order, newest to oldest.
 *
 * Nickname: list_user_page_views
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{user_id}/page_views`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
