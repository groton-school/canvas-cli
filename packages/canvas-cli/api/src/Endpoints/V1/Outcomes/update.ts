import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { Outcome } from '../../../Resources/Outcomes.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The new outcome title. */
  title: string;
  /**
   * A friendly name shown in reports for outcomes with cryptic titles, such
   * as common core standards names.
   */
  display_name: string;
  /** The new outcome description. */
  description: string;
  /** A custom GUID for the learning standard. */
  vendor_guid: string;
  /**
   * The new mastery threshold for the embedded rubric criterion.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  mastery_points: number | string;
  /** The description of a new rating level for the embedded rubric criterion. */
  'ratings[description]': string[];
  /**
   * The points corresponding to a new rating level for the embedded rubric
   * criterion.
   *
   * Format: 'int64'
   */
  'ratings[points]': number | string[];
  /**
   * The new calculation method. If the Outcomes New Decaying Average
   * Calculation Method FF is ENABLED then "weighted_average" can be used and
   * it is same as previous "decaying_average" and new "decaying_average" will
   * have improved version of calculation.
   */
  calculation_method: string;
  /**
   * The new calculation int. Only applies if the calculation_method is
   * "decaying_average" or "n_mastery"
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  calculation_int: number | string;
  /**
   * If defaults are requested, then color and mastery level defaults will be
   * added to outcome ratings in the result. This will only take effect if the
   * Account Level Mastery Scales FF is DISABLED
   *
   * Type: boolean
   */
  add_defaults: boolean | string;
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
 * Update an outcome
 *
 * Modify an existing outcome. Fields not provided are left as is; unrecognized
 * fields are ignored.
 *
 * If any new ratings are provided, the combination of all new ratings provided
 * completely replace any existing embedded rubric criterion; it is not possible
 * to tweak the ratings of the embedded rubric criterion.
 *
 * A new embedded rubric criterion's mastery_points default to the maximum
 * points in the highest rating if not specified in the mastery_points
 * parameter. Any new ratings lacking a description are given a default of "No
 * description". Any new ratings lacking a point value are given a default of
 * 0.
 *
 * Nickname: update_outcome
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Outcome>(`/api/v1/outcomes/{id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
