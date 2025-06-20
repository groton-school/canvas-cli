import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  quiz_submission_id: string;
};

export type getSearchParameters = Partial<{
  /** Associations to include with the quiz submission question. */
  include: string[];
}>;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
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
  const response = await client().fetchAs<void>(
    `/api/v1/quiz_submissions/{quiz_submission_id}/questions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
