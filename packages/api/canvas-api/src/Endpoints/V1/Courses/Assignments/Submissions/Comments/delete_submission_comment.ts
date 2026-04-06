import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: delete_submission_commentPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_submission_commentPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_submission_commentSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<delete_submission_commentSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_submission_commentSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: delete_submission_commentSearchParameters;
          }
      ) & {
        strict: true;
      })
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
