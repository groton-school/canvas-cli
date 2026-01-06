import { JSONValue } from '@battis/typescript-tricks';

export type AccountCalendar = {
  /**
   * The ID of the account associated with this calendar
   *
   * Type: integer
   */
  id: number | string;
  /** The name of the account associated with this calendar */
  name: string;
  /**
   * The account's parent ID, or null if this is the root account
   *
   * Type: integer
   */
  parent_account_id: number | string;
  /**
   * The ID of the root account, or null if this is the root account
   *
   * Type: integer
   */
  root_account_id: number | string;
  /**
   * Whether this calendar is visible to users
   *
   * Type: boolean
   */
  visible: boolean | string;
  /**
   * Whether users see this calendar's events without needing to manually add it
   *
   * Type: boolean
   */
  auto_subscribe: boolean | string;
  /**
   * Number of this account's direct sub-accounts
   *
   * Type: integer
   */
  sub_account_count: number | string;
  /** Asset string of the account */
  asset_string: string;
  /** Object type */
  type: string;
  /** Url to get full detailed events */
  calendar_event_url: string;
  /**
   * Whether the user can create calendar events
   *
   * Type: boolean
   */
  can_create_calendar_events: boolean | string;
  /** API path to create events for the account */
  create_calendar_event_url: string;
  /** Url to open the more options event editor */
  new_calendar_event_url: string;
};
