import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete Peer Review
 *
 * Delete a peer review for the assignment
 *
 * Nickname: delete_peer_review_sections
 */
export async function delete_peer_review_sections({
  parameters
}: Options): Promise<PeerReview> {
  return await (
    await fetch(
      `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
