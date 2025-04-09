import { client } from '../../../../Client.js';
import { Submission } from '../../../../Resources/Submissions.js';

type getPathParameters = {
  /** ID */
  id: string;
};

type getSearchParameters = {
  /** Associations to include with the group */
  include: string[];
  /** Returns submissions for only currently active enrollments */
  only_current_enrollments: boolean;
  /** Returns submissions for only published assignments */
  only_published_assignments: boolean;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get a users most recently graded submissions
 *
 * Nickname: get_users_most_recently_graded_submissions
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{id}/graded_submissions`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
