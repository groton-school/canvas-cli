import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type update_grading_period_setPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type update_grading_period_setSearchParameters = Masquerade;

export type update_grading_period_setFormParameters = Masquerade & {
  /** A list of associated term ids for the grading period set */
  enrollment_term_ids: string[];
  /** The title of the grading period set */
  'grading_period_set[title]': string[];
  /**
   * A boolean to determine whether the grading periods in the set are
   * weighted
   */
  'grading_period_set[weighted]': boolean | string[];
  /**
   * A boolean to determine whether the totals for all grading periods in the
   * set are displayed
   */
  'grading_period_set[display_totals_for_all_grading_periods]':
    | boolean
    | string[];
};

type Options = {
  pathParams: update_grading_period_setPathParameters;
} & (
  | {
      searchParams?: Partial<update_grading_period_setSearchParameters>;
      params?: Partial<update_grading_period_setFormParameters>;
      strict?: false;
    }
  | {
      searchParams: update_grading_period_setSearchParameters;
      params: update_grading_period_setFormParameters;
      strict: true;
    }
);

/**
 * Update a grading period set
 *
 * Update an existing grading period set
 *
 * <b>204 No Content</b> response code is returned if the update was successful.
 *
 * Nickname: update_grading_period_set
 */
export async function update_grading_period_set(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/grading_period_sets/{id}`,
    {
      method: 'PATCH',
      ...options
    }
  );
  return response;
}
