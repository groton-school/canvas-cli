import { client } from '../../../../Client.js';

export type update_grading_period_setPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type update_grading_period_setFormParameters = {
  /** A list of associated term ids for the grading period set */
  enrollment_term_ids: string[];
  /** The title of the grading period set */
  'grading_period_set[title]': string[];
  /**
   * A boolean to determine whether the grading periods in the set are
   * weighted
   */
  'grading_period_set[weighted]': string[];
  /**
   * A boolean to determine whether the totals for all grading periods in the
   * set are displayed
   */
  'grading_period_set[display_totals_for_all_grading_periods]': string[];
};

type Options = {
  pathParams: update_grading_period_setPathParameters;
  params?: update_grading_period_setFormParameters;
};

/**
 * Update a grading period set
 *
 * Update an existing grading period set
 *
 * <b>204 No Content</b> response code is returned if the update was successful.
 *
 * Nickname: update_grading_period_set
 */
export async function update_grading_period_set({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/grading_period_sets/{id}`,
    {
      method: 'PATCH',
      pathParams,
      params
    }
  );
}
