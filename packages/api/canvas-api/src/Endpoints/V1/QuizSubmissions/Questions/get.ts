import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  quiz_submission_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /** Associations to include with the quiz submission question. */
    include: string[];
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get all quiz submission questions.
 *
 * Get a list of all the question records for this quiz submission.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_all_quiz_submission_questions
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/quiz_submissions/{quiz_submission_id}/questions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
