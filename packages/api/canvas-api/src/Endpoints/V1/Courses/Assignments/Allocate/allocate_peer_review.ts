import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: allocate_peer_reviewPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: allocate_peer_reviewPathParameters;
    }
) &
  (
    | {
        query?: Partial<allocate_peer_reviewSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<allocate_peer_reviewSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<allocate_peer_reviewSearchParameters>;
        /** @deprecated Use {Options.query} */
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
