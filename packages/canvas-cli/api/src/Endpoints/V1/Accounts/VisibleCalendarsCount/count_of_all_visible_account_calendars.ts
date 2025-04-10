import { client } from '../../../../Client.js';

export type count_of_all_visible_account_calendarsPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: count_of_all_visible_account_calendarsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Count of all visible account calendars
 *
 * Returns the number of visible account calendars.
 *
 * Nickname: count_of_all_visible_account_calendars
 */
export async function count_of_all_visible_account_calendars({
  pathParams
}: Options) {
  return await client().fetchAs<{ count: number }>(
    `/v1/accounts/{account_id}/visible_calendars_count`,
    {
      method: 'GET',
      pathParams
    }
  );
}
