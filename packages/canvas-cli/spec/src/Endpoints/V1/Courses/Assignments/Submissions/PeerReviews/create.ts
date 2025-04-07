import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

type Parameters = {
  /**
   * User_id to assign as reviewer on this assignment
   *
   * Format: int64
   */
  user_id: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create Peer Review
 *
 * Create a peer review for the assignment
 *
 * Nickname: create_peer_review_courses
 */
export async function create({ parameters }: Options): Promise<PeerReview> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
