import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Date } from '../../../../Overrides.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
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
export async function update(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
