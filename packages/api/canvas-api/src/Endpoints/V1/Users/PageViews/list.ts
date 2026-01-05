import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { PageView } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
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
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List user page views
 *
 * Return a paginated list of the user's page view history in json format,
 * similar to the available CSV download. Page views are returned in descending
 * order, newest to oldest.
 *
 * Nickname: list_user_page_views
 */
export async function list(options: Options) {
  const response = await client().fetchAs<PageView[]>(
    `/api/v1/users/{user_id}/page_views`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
