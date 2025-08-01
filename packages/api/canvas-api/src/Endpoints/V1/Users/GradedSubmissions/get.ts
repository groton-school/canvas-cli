import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Submission } from '../../../../Resources/Submissions.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /** Associations to include with the group */
    include: string[];
    /**
     * Returns submissions for only currently active enrollments
     *
     * Type: boolean
     */
    only_current_enrollments: boolean | string;
    /**
     * Returns submissions for only published assignments
     *
     * Type: boolean
     */
    only_published_assignments: boolean | string;
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
 * Get a users most recently graded submissions
 *
 * Nickname: get_users_most_recently_graded_submissions
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Submission[]>(
    `/api/v1/users/{id}/graded_submissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
