import { BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs } from '';
import { client } from '../../../../Client.js';

type Parameters = {
  /**
   * [blackout_date, ...] An object containing the array of BlackoutDates we
   * want to exist after this operation. For array entries, if it has an id it
   * will be updated, if not created, and if an existing BlackoutDate id is
   * missing from the array, it will be deleted.
   */
  'blackout_dates:': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a list of Blackout Dates
 *
 * Create, update, and delete blackout dates to sync the db with the incoming
 * data.
 *
 * Nickname: update_list_of_blackout_dates
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/blackout_dates`,
    { method: 'PUT', params: parameters }
  );
}
