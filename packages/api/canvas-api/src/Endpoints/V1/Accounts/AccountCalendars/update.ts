import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type updateSearchParameters = Masquerade;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/account_calendars`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
