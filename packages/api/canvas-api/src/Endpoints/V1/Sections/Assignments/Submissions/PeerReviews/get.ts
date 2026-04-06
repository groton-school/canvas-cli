import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type getPathParameters = {
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

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** Associations to include with the peer review. */
    include: string[];
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get all Peer Reviews
 *
 * Get a list of all Peer Reviews for this assignment
 *
 * Nickname: get_all_peer_reviews_sections_submissions
 */
export async function get(options: Options) {
  const response = await client().fetchAs<PeerReview[]>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
