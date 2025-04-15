import { client } from '../../../../../Client.js';
import { Date } from '../../../../../Overrides.js';

export type batchUpdatePathParameters = {
  /** The id of the grading period set. */
  set_id: string;
};

export type batchUpdateFormParameters = {
  /**
   * The id of the grading period. If the id parameter does not exist, a new
   * grading period will be created.
   */
  'grading_periods[id]': string[];
  /**
   * The title of the grading period. The title is required for creating a new
   * grading period, but not for updating an existing grading period.
   */
  'grading_periods[title]': string[];
  /**
   * The date the grading period starts. The start_date is required for
   * creating a new grading period, but not for updating an existing grading
   * period.
   */
  'grading_periods[start_date]': Date[];
  /**
   * The date the grading period ends. The end_date is required for creating a
   * new grading period, but not for updating an existing grading period.
   */
  'grading_periods[end_date]': Date[];
  /**
   * The date after which grades can no longer be changed for a grading
   * period. The close_date is required for creating a new grading period, but
   * not for updating an existing grading period.
   */
  'grading_periods[close_date]': Date[];
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
  pathParams: batchUpdatePathParameters;
} & (
  | {
      params?: Partial<batchUpdateFormParameters>;
      strict?: false;
    }
  | {
      params: batchUpdateFormParameters;
      strict: true;
    }
);

/**
 * Batch update grading periods
 *
 * Update multiple grading periods
 *
 * Nickname: batch_update_grading_periods_grading_period_sets
 */
export async function batchUpdate(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/grading_period_sets/{set_id}/grading_periods/batch_update`,
    {
      method: 'PATCH',
      ...options
    }
  );
}
