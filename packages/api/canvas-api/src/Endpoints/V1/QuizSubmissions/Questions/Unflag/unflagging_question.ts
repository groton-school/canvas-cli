import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type unflagging_questionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  quiz_submission_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type unflagging_questionSearchParameters = Masquerade;

export type unflagging_questionFormParameters = Masquerade & {
  /**
   * The attempt number of the quiz submission being taken. Note that this
   * must be the latest attempt index, as questions for earlier attempts can
   * not be modified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  attempt: number | string;
  /**
   * The unique validation token you received when the Quiz Submission was
   * created.
   */
  validation_token: string;
  /** Access code for the Quiz, if any. */
  access_code: string;
};

type Options = (
  | {
      path: unflagging_questionPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: unflagging_questionPathParameters;
    }
) &
  (
    | {
        query?: Partial<unflagging_questionSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<unflagging_questionSearchParameters>;
        body?: Partial<unflagging_questionFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<unflagging_questionFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: unflagging_questionSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: unflagging_questionSearchParameters;
          }
      ) &
        (
          | {
              body: unflagging_questionFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: unflagging_questionFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Unflagging a question.
 *
 * Remove the flag that you previously set on a quiz question after you've
 * returned to it.
 *
 * Nickname: unflagging_question
 */
export async function unflagging_question(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/unflag`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
