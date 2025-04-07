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
}: Options): Promise<{ count: number }> {
  return await (
    await fetch(`/v1/accounts/{account_id}/visible_calendars_count`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
