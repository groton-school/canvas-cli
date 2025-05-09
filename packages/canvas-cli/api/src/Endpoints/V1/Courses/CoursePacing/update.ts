import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /** ID */
  id: string;
  /**
   * The id of the course
   *
   * Format: 'int64'
   */
  course_id: number;
};

export type updateFormParameters = {
  /**
   * The id of the course pace
   *
   * Format: 'int64'
   */
  course_pace_id: number;
  /**
   * End date of the course pace
   *
   * Format: date-time
   */
  end_date: string;
  /** Course pace dates excludes weekends if true */
  exclude_weekends: boolean;
  /** [Array<String>] Course pace dates excludes weekends if true */
  selected_days_to_skip: string;
  /** Course pace uess hard end dates if true */
  hard_end_dates: boolean;
  /** The state of the course pace */
  workflow_state: string;
  /** Module Items attributes */
  course_pace_module_item_attributes: string[];
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<CoursePace>(
    `/api/v1/courses/{course_id}/course_pacing/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
