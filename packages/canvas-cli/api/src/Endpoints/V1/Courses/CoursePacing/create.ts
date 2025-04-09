import { Datetime } from '';
import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

type Parameters = {
  /** End date of the course pace */
  end_date: Datetime;
  /** End date context (course, section, hupothetical) */
  end_date_context: string;
  /** Start date of the course pace */
  start_date: Datetime;
  /** Start date context (course, section, hupothetical) */
  start_date_context: string;
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
  /**
   * Pace Context ID
   *
   * Format: 'int64'
   */
  context_id: number;
  /** Pace Context Type (Course, Section, User) */
  context_type: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a Course pace
 *
 * Nickname: create_course_pace
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<CoursePace>(
    `/v1/courses/{course_id}/course_pacing`,
    { method: 'POST', params: parameters }
  );
}
