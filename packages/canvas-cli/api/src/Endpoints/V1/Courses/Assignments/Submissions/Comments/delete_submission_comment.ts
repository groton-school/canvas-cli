import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { SubmissionComment } from '../../../../../../Resources/Submissions.js';

export type delete_submission_commentPathParameters = {
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
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_submission_commentSearchParameters = Masquerade;

type Options = {
  pathParams: delete_submission_commentPathParameters;
} & (
  | {
      searchParams?: Partial<delete_submission_commentSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_submission_commentSearchParameters;
      strict: true;
    }
);

/**
 * Delete a submission comment
 *
 * Delete the given submission comment.
 *
 * Nickname: delete_submission_comment
 */
export async function delete_submission_comment(options: Options) {
  const response = await client().fetchAs<SubmissionComment>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
