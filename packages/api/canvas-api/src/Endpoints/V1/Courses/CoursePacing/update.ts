import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
  /**
   * The id of the course
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The id of the course pace
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_pace_id: number | string;
  /**
   * End date of the course pace
   *
   * Format: date-time
   */
  end_date: string;
  /**
   * Course pace dates excludes weekends if true
   *
   * Type: boolean
   */
  exclude_weekends: boolean | string;
  /** [Array<String>] Course pace dates excludes weekends if true */
  selected_days_to_skip: string;
  /**
   * Course pace uess hard end dates if true
   *
   * Type: boolean
   */
  hard_end_dates: boolean | string;
  /** The state of the course pace */
  workflow_state: string;
  /** Module Items attributes */
  course_pace_module_item_attributes: string[];
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
 * Update a Course pace
 *
 * Returns the updated course pace
 *
 * Nickname: update_course_pace
 */
export async function update(options: Options) {
  const response = await client().fetchAs<CoursePace>(
    `/api/v1/courses/{course_id}/course_pacing/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
