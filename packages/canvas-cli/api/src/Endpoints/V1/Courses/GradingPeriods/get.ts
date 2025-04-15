import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a single grading period
 *
 * Returns the grading period with the given id
 *
 * Nickname: get_single_grading_period
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
