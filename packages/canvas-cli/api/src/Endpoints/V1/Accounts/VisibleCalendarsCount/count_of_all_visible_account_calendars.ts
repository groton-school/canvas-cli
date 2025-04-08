import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Count of all visible account calendars
 *
 * Returns the number of visible account calendars.
 *
 * Nickname: count_of_all_visible_account_calendars
 */
export async function count_of_all_visible_account_calendars({
  parameters
}: Options) {
  return await client().fetchAs<{ count: number }>(
    `/v1/accounts/{account_id}/visible_calendars_count`,
    { method: 'GET', params: parameters }
  );
}
