import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function update(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/account_calendars`,
    {
      method: 'PUT',
      ...options
    }
  );
}
