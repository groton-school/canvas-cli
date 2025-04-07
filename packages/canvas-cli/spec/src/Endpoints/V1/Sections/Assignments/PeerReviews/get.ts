import { PeerReview } from '../../../../../Resources/PeerReviews.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all Peer Reviews
 *
 * Get a list of all Peer Reviews for this assignment
 *
 * Nickname: get_all_peer_reviews_sections_peer_reviews
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/sections/{section_id}/assignments/{assignment_id}/peer_reviews`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
