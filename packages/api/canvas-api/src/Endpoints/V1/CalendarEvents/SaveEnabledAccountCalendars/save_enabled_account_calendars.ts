import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type save_enabled_account_calendarsSearchParameters = Masquerade;

export type save_enabled_account_calendarsFormParameters = Masquerade & {
  /**
   * Flag to mark account calendars feature as seen
   *
   * Type: boolean
   */
  mark_feature_as_seen: boolean | string;
  /** An array of account Ids to remember in the calendars list of the user */
  enabled_account_calendars: string[];
};

type Options =
  | {
      searchParams?: Partial<save_enabled_account_calendarsSearchParameters>;
      params?: Partial<save_enabled_account_calendarsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: save_enabled_account_calendarsSearchParameters;
      params: save_enabled_account_calendarsFormParameters;
      strict: true;
    };

/**
 * Save enabled account calendars
 *
 * Creates and updates the enabled_account_calendars and mark_feature_as_seen
 * user preferences
 *
 * Nickname: save_enabled_account_calendars
 */
export async function save_enabled_account_calendars(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/calendar_events/save_enabled_account_calendars`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
