import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type fetching_latest_quiz_statisticsPathParameters = {
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
  quiz_id: string | number;
};

export type fetching_latest_quiz_statisticsSearchParameters = Masquerade &
  Partial<{
    /**
     * Whether the statistics report should include all submissions attempts.
     *
     * Type: boolean
     */
    all_versions: boolean | string;
  }>;

type Options = (
  | {
      path: fetching_latest_quiz_statisticsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: fetching_latest_quiz_statisticsPathParameters;
    }
) &
  (
    | {
        query?: Partial<fetching_latest_quiz_statisticsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<fetching_latest_quiz_statisticsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: fetching_latest_quiz_statisticsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: fetching_latest_quiz_statisticsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Fetching the latest quiz statistics
 *
 * This endpoint provides statistics for all quiz versions, or for a specific
 * quiz version, in which case the output is guaranteed to represent the
 * _latest_ and most current version of the quiz.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: fetching_latest_quiz_statistics
 */
export async function fetching_latest_quiz_statistics(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/statistics`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
