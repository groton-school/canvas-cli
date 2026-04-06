import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { QueryResultsResponse } from '../../../../../../Overrides.js';

export type beta_get_query_resultsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * The UUID of the completed query to retrieve results for
   *
   * Type: string
   */
  query_id: string | number;
};

export type beta_get_query_resultsSearchParameters = Masquerade;

type Options = (
  | {
      path: beta_get_query_resultsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: beta_get_query_resultsPathParameters;
    }
) &
  (
    | {
        query?: Partial<beta_get_query_resultsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<beta_get_query_resultsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<beta_get_query_resultsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: beta_get_query_resultsSearchParameters;
        strict: true;
      }
  );

/**
 * BETA - Get query results
 *
 * Retrieves the results of a completed page views query. Returns the data in
 * the format specified when the query was initiated (CSV or JSON). The response
 * may be compressed with gzip encoding.
 *
 * As this is a beta endpoint, it is subject to change or removal at any time
 * without the standard notice periods outlined in the API policy.
 *
 * Nickname: beta_get_query_results
 */
export async function beta_get_query_results(options: Options) {
  const response = await client().fetchAs<QueryResultsResponse>(
    `/api/v1/users/{user_id}/page_views/query/{query_id}/results`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
