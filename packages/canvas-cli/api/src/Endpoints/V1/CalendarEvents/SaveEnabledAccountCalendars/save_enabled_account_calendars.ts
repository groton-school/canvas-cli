import { client } from '../../../../Client.js';

type Parameters = {
  /** Flag to mark account calendars feature as seen */
  mark_feature_as_seen: boolean;
  /** An array of account Ids to remember in the calendars list of the user */
  enabled_account_calendars: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Save enabled account calendars
 *
 * Creates and updates the enabled_account_calendars and mark_feature_as_seen
 * user preferences
 *
 * Nickname: save_enabled_account_calendars
 */
export async function save_enabled_account_calendars({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/calendar_events/save_enabled_account_calendars`,
    { method: 'POST', params: parameters }
  );
}
