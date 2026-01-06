import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  section_id: string | number;
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

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * User_id to assign as reviewer on this assignment
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  user_id: number | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
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
export async function create(options: Options) {
  const response = await client().fetchAs<PeerReview>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
