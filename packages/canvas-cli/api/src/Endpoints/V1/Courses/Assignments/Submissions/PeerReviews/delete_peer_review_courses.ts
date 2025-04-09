import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

type delete_peer_review_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

type delete_peer_review_coursesSearchParameters = {
  /**
   * User_id to delete as reviewer on this assignment
   *
   * Format: 'int64'
   */
  user_id: number;
};

type Options = {
  pathParams: delete_peer_review_coursesPathParameters;
  searchParams?: delete_peer_review_coursesSearchParameters;
};

/**
 * Delete Peer Review
 *
 * Delete a peer review for the assignment
 *
 * Nickname: delete_peer_review_courses
 */
export async function delete_peer_review_courses({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<PeerReview>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'DELETE',
      pathParams,
      searchParams
    }
  );
}
