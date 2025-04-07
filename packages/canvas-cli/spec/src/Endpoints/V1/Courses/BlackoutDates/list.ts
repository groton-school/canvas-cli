import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List blackout dates
 *
 * Returns the list of blackout dates for the current context.
 *
 * Nickname: list_blackout_dates_courses
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/blackout_dates`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
