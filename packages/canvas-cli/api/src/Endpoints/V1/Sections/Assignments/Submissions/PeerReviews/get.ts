import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all Peer Reviews
 *
 * Get a list of all Peer Reviews for this assignment
 *
 * Nickname: get_all_peer_reviews_sections_submissions
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    { method: 'GET', params: parameters }
  );
}
