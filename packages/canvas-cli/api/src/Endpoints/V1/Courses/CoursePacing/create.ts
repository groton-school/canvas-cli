import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { CoursePace } from '../../../../Resources/CoursePace.js';

export type createPathParameters = {
  /**
   * The id of the course
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * End date of the course pace
   *
   * Format: date-time
   */
  end_date: string;
  /** End date context (course, section, hupothetical) */
  end_date_context: string;
  /**
   * Start date of the course pace
   *
   * Format: date-time
   */
  start_date: string;
  /** Start date context (course, section, hupothetical) */
  start_date_context: string;
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
  /**
   * Pace Context ID
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  context_id: number | string;
  /** Pace Context Type (Course, Section, User) */
  context_type: string;
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
 * Create a Course pace
 *
 * Nickname: create_course_pace
 */
export async function create(options: Options) {
  const response = await client().fetchAs<CoursePace>(
    `/api/v1/courses/{course_id}/course_pacing`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
