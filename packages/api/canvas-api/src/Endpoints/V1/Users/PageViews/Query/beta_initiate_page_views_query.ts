import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { AsyncQueryResponse } from '../../../../../Resources/Users.js';

export type beta_initiate_page_views_queryPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type beta_initiate_page_views_querySearchParameters = Masquerade;

export type beta_initiate_page_views_queryFormParameters = Masquerade & {
  /**
   * The start date for the page views query in YYYY-MM-DD format. Must be the
   * first day of a month.
   */
  start_date: string;
  /**
   * The end date for the page views query in YYYY-MM-DD format. Must be the
   * first day of a month and after start_date.
   */
  end_date: string;
  /**
   * The desired format for the query results. Supported formats: "csv",
   * "jsonl"
   */
  results_format: string;
};

type Options = {
  pathParams: beta_initiate_page_views_queryPathParameters;
} & (
  | {
      searchParams?: Partial<beta_initiate_page_views_querySearchParameters>;
      params?: Partial<beta_initiate_page_views_queryFormParameters>;
      strict?: false;
    }
  | {
      searchParams: beta_initiate_page_views_querySearchParameters;
      params: beta_initiate_page_views_queryFormParameters;
      strict: true;
    }
);

/**
 * BETA - Initiate page views query
 *
 * Initiates an asynchronous query for user page views data within a specified
 * date range. This method enqueues a background job to process the page views
 * query and returns a polling URL that can be used to check the query status
 * and retrieve results when ready.
 *
 * As this is a beta endpoint, it is subject to change or removal at any time
 * without the standard notice periods outlined in the API policy.
 *
 * Nickname: beta_initiate_page_views_query
 */
export async function beta_initiate_page_views_query(options: Options) {
  const response = await client().fetchAs<AsyncQueryResponse>(
    `/api/v1/users/{user_id}/page_views/query`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
