import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Quiz } from '../../../../Resources/Quizzes.js';

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
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * If true, notifies users that the quiz has changed. Defaults to true
   *
   * Type: boolean
   */
  'quiz[notify_of_update]': boolean | string;
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
        /** @deprecated Use {@link Options.query} */
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
            /** @deprecated Use {@link Options.query} */
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
 * Edit a quiz
 *
 * Modify an existing quiz. See the documentation for quiz creation.
 *
 * Additional arguments:
 *
 * Nickname: edit_quiz
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Quiz>(
    `/api/v1/courses/{course_id}/quizzes/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
