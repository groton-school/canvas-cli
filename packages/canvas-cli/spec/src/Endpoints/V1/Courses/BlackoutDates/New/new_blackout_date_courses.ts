import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * New Blackout Date
 *
 * Initialize an unsaved Blackout Date for the given context.
 *
 * Nickname: new_blackout_date_courses
 */
export async function new_blackout_date_courses({
  parameters
}: Options): Promise<BlackoutDate> {
  return await (
    await fetch(`/v1/courses/{course_id}/blackout_dates/new`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
