import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Result } from '../../../../../Resources/LiveAssessments.js';

export type show_collection_of_resultsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  line_item_id: string | number;
};

export type show_collection_of_resultsSearchParameters = Masquerade;

type Options = {
  pathParams: show_collection_of_resultsPathParameters;
} & (
  | {
      searchParams?: Partial<show_collection_of_resultsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_collection_of_resultsSearchParameters;
      strict: true;
    }
);

/**
 * Show a collection of Results
 *
 * Show existing Results of a line item. Can be used to retrieve a specific
 * student's result by adding the user_id (defined as the lti_user_id or the
 * Canvas user_id) as a query parameter (i.e. user_id=1000). If user_id is
 * included, it will return only one Result in the collection if the result
 * exists, otherwise it will be empty. May also limit number of results by
 * adding the limit query param (i.e. limit=100)
 *
 * Nickname: show_collection_of_results
 */
export async function show_collection_of_results(options: Options) {
  const response = await client().fetchAs<Result>(
    `/api/lti/courses/{course_id}/line_items/{line_item_id}/results`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
