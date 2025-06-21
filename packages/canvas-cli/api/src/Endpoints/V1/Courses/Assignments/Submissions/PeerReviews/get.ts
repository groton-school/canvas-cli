import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { PeerReview } from '../../../../../../Resources/PeerReviews.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** Associations to include with the peer review. */
    include: string[];
  }>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get all Peer Reviews
 *
 * Get a list of all Peer Reviews for this assignment
 *
 * Nickname: get_all_peer_reviews_courses_submissions
 */
export async function get(options: Options) {
  const response = await client().fetchAs<PeerReview[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
