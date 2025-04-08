import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

type Parameters = {
  /**
   * The start date of the blackout date.
   *
   * Format: date
   */
  start_date: string;
  /**
   * The end date of the blackout date.
   *
   * Format: date
   */
  end_date: string;
  /** The title of the blackout date. */
  event_title: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create Blackout Date
 *
 * Create a blackout date for the given context.
 *
 * Nickname: create_blackout_date_courses
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/courses/{course_id}/blackout_dates`,
    { method: 'POST', params: parameters }
  );
}
