import { Datetime } from '';
import { CoursePace } from '../../../../Resources/CoursePace.js';

type Parameters = {
  /**
   * The id of the course pace
   *
   * Format: int64
   */
  course_pace_id: number;
  /** End date of the course pace */
  end_date: Datetime;
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
  parameters: Parameters;
};

/**
 * Update a Course pace
 *
 * Returns the updated course pace
 *
 * Nickname: update_course_pace
 */
export async function update({ parameters }: Options): Promise<CoursePace> {
  return await (
    await fetch(`/v1/courses/{course_id}/course_pacing/{id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
