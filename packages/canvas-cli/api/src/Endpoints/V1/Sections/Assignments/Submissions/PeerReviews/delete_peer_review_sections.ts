import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type delete_peer_review_sectionsPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

export type delete_peer_review_sectionsSearchParameters = Masquerade &
  Partial<{
    /**
     * User_id to delete as reviewer on this assignment
     *
     * Format: 'int64'
     */
    user_id: number;
  }>;

type Options = {
  pathParams: delete_peer_review_sectionsPathParameters;
} & (
  | {
      searchParams?: Partial<delete_peer_review_sectionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_peer_review_sectionsSearchParameters;
      strict: true;
    }
);

/**
 * Delete Peer Review
 *
 * Delete a peer review for the assignment
 *
 * Nickname: delete_peer_review_sections
 */
export async function delete_peer_review_sections(options: Options) {
  const response = await client().fetchAs<PeerReview>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
