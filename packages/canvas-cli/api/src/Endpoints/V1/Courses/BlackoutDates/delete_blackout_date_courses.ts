import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete Blackout Date
 *
 * Delete a blackout date for the given context.
 *
 * Nickname: delete_blackout_date_courses
 */
export async function delete_blackout_date_courses({ parameters }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/courses/{course_id}/blackout_dates/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
