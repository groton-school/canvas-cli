import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { PeerReview } from '../../../../../Resources/PeerReviews.js';

export type getPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
};

export type getSearchParameters = {
  /** Associations to include with the peer review. */
  include: string[];
} & Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: getSearchParameters;
      strict: true;
    }
);

/**
 * Get all Peer Reviews
 *
 * Get a list of all Peer Reviews for this assignment
 *
 * Nickname: get_all_peer_reviews_sections_peer_reviews
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/sections/{section_id}/assignments/{assignment_id}/peer_reviews`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
