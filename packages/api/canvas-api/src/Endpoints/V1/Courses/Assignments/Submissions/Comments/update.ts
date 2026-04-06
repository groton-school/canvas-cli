import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
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
