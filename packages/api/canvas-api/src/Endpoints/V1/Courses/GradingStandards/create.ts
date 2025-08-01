import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { GradingStandard } from '../../../../Resources/GradingStandards.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The title for the Grading Standard. */
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
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a new grading standard
 *
 * Create a new grading standard
 *
 * Nickname: create_new_grading_standard_courses
 */
export async function create(options: Options) {
  const response = await client().fetchAs<GradingStandard>(
    `/api/v1/courses/{course_id}/grading_standards`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
