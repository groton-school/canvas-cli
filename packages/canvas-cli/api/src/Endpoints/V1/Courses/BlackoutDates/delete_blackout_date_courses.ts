import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type delete_blackout_date_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type delete_blackout_date_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: delete_blackout_date_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<delete_blackout_date_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_blackout_date_coursesSearchParameters;
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
export async function delete_blackout_date_courses(options: Options) {
  const response = await client().fetchAs<BlackoutDate>(
    `/api/v1/courses/{course_id}/blackout_dates/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
