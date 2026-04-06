import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type delete_peer_review_sectionsPathParameters = {
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

export type delete_peer_review_sectionsSearchParameters = Masquerade &
  Partial<{
    /**
     * User_id to delete as reviewer on this assignment
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    user_id: number | string;
  }>;

type Options = (
  | {
      path: delete_peer_review_sectionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_peer_review_sectionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_peer_review_sectionsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_peer_review_sectionsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_peer_review_sectionsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_peer_review_sectionsSearchParameters;
          }
      ) & {
        strict: true;
      })
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
