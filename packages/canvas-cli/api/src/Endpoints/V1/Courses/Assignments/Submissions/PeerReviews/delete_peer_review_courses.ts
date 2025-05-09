import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type delete_peer_review_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

export type delete_peer_review_coursesSearchParameters = Partial<{
  /**
   * User_id to delete as reviewer on this assignment
   *
   * Format: 'int64'
   */
  user_id: number;
}>;

type Options = {
  pathParams: delete_peer_review_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<delete_peer_review_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_peer_review_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Delete Peer Review
 *
 * Delete a peer review for the assignment
 *
 * Nickname: delete_peer_review_courses
 */
export async function delete_peer_review_courses(options: Options) {
  return await client().fetchAs<PeerReview>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
