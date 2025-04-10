import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Submission } from '../../../../Resources/Submissions.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /** Associations to include with the group */
  include: string[];
  /** Returns submissions for only currently active enrollments */
  only_current_enrollments: boolean;
  /** Returns submissions for only published assignments */
  only_published_assignments: boolean;
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
