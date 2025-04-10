import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type delete_blackout_date_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_blackout_date_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete Blackout Date
 *
 * Delete a blackout date for the given context.
 *
 * Nickname: delete_blackout_date_courses
 */
export async function delete_blackout_date_courses({ pathParams }: Options) {
  return await client().fetchAs<BlackoutDate>(
    `/v1/courses/{course_id}/blackout_dates/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
