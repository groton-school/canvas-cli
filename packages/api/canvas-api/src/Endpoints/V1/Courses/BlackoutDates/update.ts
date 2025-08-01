import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs } from '../../../../Overrides.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type updateSearchParameters = Masquerade & Paginated;

export type updateFormParameters = Masquerade & {
  /**
   * [blackout_date, ...] An object containing the array of BlackoutDates we
   * want to exist after this operation. For array entries, if it has an id it
   * will be updated, if not created, and if an existing BlackoutDate id is
   * missing from the array, it will be deleted.
   */
  'blackout_dates:': string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a list of Blackout Dates
 *
 * Create, update, and delete blackout dates to sync the db with the incoming
 * data.
 *
 * Nickname: update_list_of_blackout_dates
 */
export async function update(options: Options) {
  const response = await client().fetchAs<
    BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs[]
  >(`/api/v1/courses/{course_id}/blackout_dates`, {
    method: 'PUT',
    ...options
  });
  return response;
}
