import { client } from '../../../../../Client.js';
import { Result } from '../../../../../Resources/LiveAssessments.js';

export type show_collection_of_resultsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  line_item_id: string;
};

type Options = {
  pathParams: show_collection_of_resultsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<Result>(
    `/api/lti/courses/{course_id}/line_items/{line_item_id}/results`,
    {
      method: 'GET',
      ...options
    }
  );
}
