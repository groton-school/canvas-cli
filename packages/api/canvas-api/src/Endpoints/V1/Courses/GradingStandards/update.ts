import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  grading_standard_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** The title for the Grading Standard */
  title: string;
  /**
   * Whether or not a grading scheme is points based. Defaults to false.
   *
   * Type: boolean
   */
  points_based: boolean | string;
  /**
   * The factor by which to scale a percentage into a points based scheme
   * grade. This is the maximum number of points possible in the grading
   * scheme. Defaults to 1. Not required for percentage based grading
   * schemes.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  scaling_factor: number | string;
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
  'grading_scheme_entry[value]': number | string[];
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
 * Update a grading standard
 *
 * Updates the grading standard with the given id
 *
 * If the grading standard has been used for grading, only the title can be
 * updated. The data, points_based, and scaling_factor cannot be modified once
 * the grading standard has been used to grade assignments.
 *
 * Nickname: update_grading_standard_courses
 */
export async function update(options: Options) {
  const response = await client().fetchAs<GradingStandard>(
    `/api/v1/courses/{course_id}/grading_standards/{grading_standard_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
