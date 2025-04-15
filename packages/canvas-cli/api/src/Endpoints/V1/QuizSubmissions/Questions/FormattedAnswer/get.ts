import { client } from '../../../../../Client.js';
import { Numeric } from '../../../../../Overrides.js';

export type getPathParameters = {
  /** ID */
  quiz_submission_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /** No description */
  answer: Numeric;
};

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
 * Get a formatted student numerical answer.
 *
 * Matches the intended behavior of the UI when a numerical answer is entered
 * and returns the resulting formatted number
 *
 * Nickname: get_formatted_student_numerical_answer
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/formatted_answer`,
    {
      method: 'GET',
      ...options
    }
  );
}
