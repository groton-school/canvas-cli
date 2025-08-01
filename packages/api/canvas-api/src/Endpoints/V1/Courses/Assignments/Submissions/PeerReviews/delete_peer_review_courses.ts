import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type delete_peer_review_coursesPathParameters = {
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
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  submission_id: string | number;
};

export type delete_peer_review_coursesSearchParameters = Masquerade &
  Partial<{
    /**
     * User_id to delete as reviewer on this assignment
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    user_id: number | string;
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
  const response = await client().fetchAs<PeerReview>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
