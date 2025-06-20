import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../../Client.js';
import { SubmissionHistory } from '../../../../../../../Resources/GradebookHistory.js';

export type lists_submissionsPathParameters = {
  /**
   * The id of the contextual course for this API call
   *
   * Format: 'int64'
   */
  course_id: number;
  /** The date for which you would like to see submissions */
  date: string;
  /**
   * The ID of the grader for which you want to see submissions
   *
   * Format: 'int64'
   */
  grader_id: number;
  /**
   * The ID of the assignment for which you want to see submissions
   *
   * Format: 'int64'
   */
  assignment_id: number;
};

export type lists_submissionsSearchParameters = Paginated;

type Options = {
  pathParams: lists_submissionsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Lists submissions
 *
 * Gives a nested list of submission versions
 *
 * Nickname: lists_submissions
 */
export async function lists_submissions(options: Options) {
  const response = await client().fetchAs<SubmissionHistory[]>(
    `/api/v1/courses/{course_id}/gradebook_history/{date}/graders/{grader_id}/assignments/{assignment_id}/submissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
