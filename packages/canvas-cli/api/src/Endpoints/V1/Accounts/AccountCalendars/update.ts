import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Update several calendars
 *
 * Set visibility and/or auto_subscribe on many calendars simultaneously.
 * Requires the `manage_account_calendar_visibility` permission on the account.
 *
 * Accepts a JSON array of objects containing 2-3 keys each: `id` (the account's
 * id, required), `visible` (a boolean indicating whether the account calendar
 * is visible), and `auto_subscribe` (a boolean indicating whether users should
 * see these events in their calendar without manually subscribing).
 *
 * Returns the count of updated accounts.
 *
 * Nickname: update_several_calendars
 */
export async function update({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/account_calendars`,
    { method: 'PUT', params: parameters }
  );
}
