import { client } from '../../../Client.js';
import { Outcome } from '../../../Resources/Outcomes.js';

type updatePathParameters = {
  /** ID */
  id: string;
};

type updateFormParameters = {
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
   * Format: 'int64'
   */
  mastery_points: number;
  /** The description of a new rating level for the embedded rubric criterion. */
  'ratings[description]': string[];
  /**
   * The points corresponding to a new rating level for the embedded rubric
   * criterion.
   *
   * Format: 'int64'
   */
  'ratings[points]': string[];
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
   * Format: 'int64'
   */
  calculation_int: number;
  /**
   * If defaults are requested, then color and mastery level defaults will be
   * added to outcome ratings in the result. This will only take effect if the
   * Account Level Mastery Scales FF is DISABLED
   */
  add_defaults: boolean;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<Outcome>(`/v1/outcomes/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
