import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type createPathParameters = {
  /** ID */
  course_id: string;
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
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create Peer Review
 *
 * Create a peer review for the assignment
 *
 * Nickname: create_peer_review_courses
 */
export async function create(options: Options) {
  const response = await client().fetchAs<PeerReview>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
