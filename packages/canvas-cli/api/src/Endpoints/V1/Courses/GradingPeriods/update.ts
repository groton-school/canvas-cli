import { Date } from '';
import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The date the grading period starts. */
  'grading_periods[start_date]': Date[];
  /** No description */
  'grading_periods[end_date]': Date[];
  /**
   * A weight value that contributes to the overall weight of a grading period
   * set which is used to calculate how much assignments in this period
   * contribute to the total grade
   *
   * Format: 'float'
   */
  'grading_periods[weight]': number[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a single grading period
 *
 * Update an existing grading period.
 *
 * Nickname: update_single_grading_period
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
