import { client } from '../../../../../Client.js';
import { BlackoutDate } from '../../../../../Resources/BlackoutDates.js';

export type new_blackout_date_coursesPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: new_blackout_date_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * New Blackout Date
 *
 * Initialize an unsaved Blackout Date for the given context.
 *
 * Nickname: new_blackout_date_courses
 */
export async function new_blackout_date_courses(options: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/api/v1/courses/{course_id}/blackout_dates/new`,
    {
      method: 'GET',
      ...options
    }
  );
}
