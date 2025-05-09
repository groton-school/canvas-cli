import { client } from '../../../../Client.js';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type createPathParameters = {
  /** ID */
  account_id: string;
};

export type createFormParameters = {
  /** The title for the Grading Standard. */
  title: string;
  /** Whether or not a grading scheme is points based. Defaults to false. */
  points_based: boolean;
  /**
   * The factor by which to scale a percentage into a points based scheme
   * grade. This is the maximum number of points possible in the grading
   * scheme. Defaults to 1. Not required for percentage based grading
   * schemes.
   *
   * Format: 'int64'
   */
  scaling_factor: number;
  /**
   * The name for an entry value within a GradingStandard that describes the
   * range of the value e.g. A-
   */
  'grading_scheme_entry[name]': string[];
  /**
   * The value for the name of the entry within a GradingStandard. The entry
   * represents the lower bound of the range for the entry. This range
   * includes the value up to the next entry in the GradingStandard, or 100 if
   * there is no upper bound. The lowest value will have a lower bound range
   * of 0. e.g. 93
   *
   * Format: 'int64'
   */
  'grading_scheme_entry[value]': number[];
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
 * Create a new grading standard
 *
 * Create a new grading standard
 *
 * Nickname: create_new_grading_standard_accounts
 */
export async function create(options: Options) {
  return await client().fetchAs<GradingStandard>(
    `/api/v1/accounts/{account_id}/grading_standards`,
    {
      method: 'POST',
      ...options
    }
  );
}
