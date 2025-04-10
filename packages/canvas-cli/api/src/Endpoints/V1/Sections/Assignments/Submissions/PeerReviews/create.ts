import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type createPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

export type createFormParameters = {
  /**
   * User_id to assign as reviewer on this assignment
   *
   * Format: 'int64'
   */
  user_id: number;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params?: createFormParameters;
      strict: true;
    }
);

/**
 * Create Peer Review
 *
 * Create a peer review for the assignment
 *
 * Nickname: create_peer_review_sections
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<PeerReview>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
