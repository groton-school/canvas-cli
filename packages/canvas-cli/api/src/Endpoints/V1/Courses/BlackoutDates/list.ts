import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { BlackoutDate } from '../../../../Resources/BlackoutDates.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List blackout dates
 *
 * Returns the list of blackout dates for the current context.
 *
 * Nickname: list_blackout_dates_courses
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<BlackoutDate[]>(
    `/v1/courses/{course_id}/blackout_dates`,
    {
      method: 'GET',
      pathParams
    }
  );
}
