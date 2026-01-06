import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { SubmissionComment } from '../../../../../../Resources/Submissions.js';

export type updatePathParameters = {
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

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** If this argument is present, edit the text of a comment. */
  comment: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Edit a submission comment
 *
 * Edit the given submission comment.
 *
 * Nickname: edit_submission_comment
 */
export async function update(options: Options) {
  const response = await client().fetchAs<SubmissionComment>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
