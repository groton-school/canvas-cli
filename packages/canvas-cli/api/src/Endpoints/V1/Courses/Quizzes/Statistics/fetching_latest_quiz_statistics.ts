import { client } from '../../../../../Client.js';

export type fetching_latest_quiz_statisticsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

export type fetching_latest_quiz_statisticsSearchParameters = Partial<{
  /** Whether the statistics report should include all submissions attempts. */
  all_versions: boolean;
}>;

type Options = {
  pathParams: fetching_latest_quiz_statisticsPathParameters;
} & (
  | {
      searchParams?: Partial<fetching_latest_quiz_statisticsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: fetching_latest_quiz_statisticsSearchParameters;
      strict: true;
    }
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
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/statistics`,
    {
      method: 'GET',
      ...options
    }
  );
}
