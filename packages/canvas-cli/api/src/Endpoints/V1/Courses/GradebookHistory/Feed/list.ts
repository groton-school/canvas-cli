import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { SubmissionVersion } from '../../../../../Resources/GradebookHistory.js';

export type listPathParameters = {
  /**
   * The id of the contextual course for this API call
   *
   * Format: 'int64'
   */
  course_id: number;
};

export type listSearchParameters = {
  /**
   * The ID of the assignment for which you want to see submissions. If
   * absent, versions of submissions from any assignment in the course are
   * included.
   *
   * Format: 'int64'
   */
  assignment_id: number;
  /**
   * The ID of the user for which you want to see submissions. If absent,
   * versions of submissions from any user in the course are included.
   *
   * Format: 'int64'
   */
  user_id: number;
  /**
   * Returns submission versions in ascending date order (oldest first). If
   * absent, returns submission versions in descending date order (newest
   * first).
   */
  ascending: boolean;
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List uncollated submission versions
 *
 * Gives a paginated, uncollated list of submission versions for all matching
 * submissions in the context. This SubmissionVersion objects will not include
 * the +new_grade+ or +previous_grade+ keys, only the +grade+; same for
 * +graded_at+ and +grader+.
 *
 * Nickname: list_uncollated_submission_versions
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<SubmissionVersion[]>(
    `/v1/courses/{course_id}/gradebook_history/feed`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
