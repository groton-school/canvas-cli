import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { PeerReview } from '../../../../../Resources/PeerReviews.js';

export type allocate_peer_reviewPathParameters = {
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
};

export type allocate_peer_reviewSearchParameters = Masquerade;

type Options = {
  pathParams: allocate_peer_reviewPathParameters;
} & (
  | {
      searchParams?: Partial<allocate_peer_reviewSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: allocate_peer_reviewSearchParameters;
      strict: true;
    }
);

/**
 * Allocate Peer Review
 *
 * Allocates a submission for the current user to peer review
 *
 * Nickname: allocate_peer_review
 */
export async function allocate_peer_review(options: Options) {
  const response = await client().fetchAs<PeerReview>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/allocate`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
