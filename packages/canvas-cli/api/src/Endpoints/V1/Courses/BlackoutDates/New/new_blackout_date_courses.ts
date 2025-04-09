import { client } from '../../../../../Client.js';
import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

type new_blackout_date_coursesPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: new_blackout_date_coursesPathParameters;
};

/**
 * New Blackout Date
 *
 * Initialize an unsaved Blackout Date for the given context.
 *
 * Nickname: new_blackout_date_courses
 */
export async function new_blackout_date_courses({ pathParams }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/courses/{course_id}/blackout_dates/new`,
    {
      method: 'GET',
      pathParams
    }
  );
}
