import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type AccountCalendar = {
  /**
   * the ID of the account associated with this calendar
   *
   * type: integer
   */
  id: number | string;
  /**
   * the name of the account associated with this calendar
   *
   *
   */
  name: string;
  /**
   * the account's parent ID, or null if this is the root account
   *
   * type: integer
   */
  parent_account_id: number | string;
  /**
   * the ID of the root account, or null if this is the root account
   *
   * type: integer
   */
  root_account_id: number | string;
  /**
   * whether this calendar is visible to users
   *
   * type: boolean
   */
  visible: boolean | string;
  /**
   * whether users see this calendar's events without needing to manually add it
   *
   * type: boolean
   */
  auto_subscribe: boolean | string;
  /**
   * number of this account's direct sub-accounts
   *
   * type: integer
   */
  sub_account_count: number | string;
  /**
   * Asset string of the account
   *
   *
   */
  asset_string: string;
  /**
   * Object type
   *
   *
   */
  type: string;
  /**
   * url to get full detailed events
   *
   *
   */
  calendar_event_url: string;
  /**
   * whether the user can create calendar events
   *
   * type: boolean
   */
  can_create_calendar_events: boolean | string;
  /**
   * API path to create events for the account
   *
   *
   */
  create_calendar_event_url: string;
  /**
   * url to open the more options event editor
   *
   *
   */
  new_calendar_event_url: string;
};
