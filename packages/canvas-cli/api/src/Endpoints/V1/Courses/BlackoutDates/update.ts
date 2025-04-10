import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs } from '../../../../Overrides.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
};

export type updateSearchParameters = Paginated;

export type updateFormParameters = {
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
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<
    BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs[]
  >(`/v1/courses/{course_id}/blackout_dates`, {
    method: 'PUT',
    pathParams,
    params
  });
}
