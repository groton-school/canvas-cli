import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

type getSearchParameters = {
  /** Associations to include with the peer review. */
  include: string[];
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get all Peer Reviews
 *
 * Get a list of all Peer Reviews for this assignment
 *
 * Nickname: get_all_peer_reviews_courses_submissions
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
