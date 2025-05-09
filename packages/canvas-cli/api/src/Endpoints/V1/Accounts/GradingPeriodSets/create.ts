import { client } from '../../../../Client.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createFormParameters = {
  /** A list of associated term ids for the grading period set */
  enrollment_term_ids: string[];
  /** The title of the grading period set */
  'grading_period_set[title]': string;
  /**
   * A boolean to determine whether the grading periods in the set are
   * weighted
   */
  'grading_period_set[weighted]': boolean;
  /**
   * A boolean to determine whether the totals for all grading periods in the
   * set are displayed
   */
  'grading_period_set[display_totals_for_all_grading_periods]': boolean;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a grading period set
 *
 * Create and return a new grading period set
 *
 * Nickname: create_grading_period_set
 */
export async function create(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/grading_period_sets`,
    {
      method: 'POST',
      ...options
    }
  );
}
