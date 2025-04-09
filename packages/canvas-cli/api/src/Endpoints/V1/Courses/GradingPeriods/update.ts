import { Date } from '';
import { client } from '../../../../Client.js';

type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type updateFormParameters = {
  /** The date the grading period starts. */
  'grading_periods[start_date]': string[];
  /** No description */
  'grading_periods[end_date]': string[];
  /**
   * A weight value that contributes to the overall weight of a grading period
   * set which is used to calculate how much assignments in this period
   * contribute to the total grade
   *
   * Format: 'float'
   */
  'grading_periods[weight]': string[];
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

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
