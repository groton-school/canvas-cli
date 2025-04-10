import { client } from '../../../Client.js';
import { CalendarEvent } from '../../../Resources/CalendarEvents.js';

export type listSearchParameters = {
  /** Defaults to "event" */
  type: string;
  /**
   * Only return events since the start_date (inclusive). Defaults to today.
   * The value should be formatted as: yyyy-mm-dd or ISO 8601
   * YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date
   */
  start_date: string;
  /**
   * Only return events before the end_date (inclusive). Defaults to
   * start_date. The value should be formatted as: yyyy-mm-dd or ISO 8601
   * YYYY-MM-DDTHH:MM:SSZ. If end_date is the same as start_date, then only
   * events on that day are returned.
   *
   * Format: date
   */
  end_date: string;
  /**
   * Defaults to false (dated events only). If true, only return undated
   * events and ignore start_date and end_date.
   */
  undated: boolean;
  /**
   * Defaults to false (uses start_date, end_date, and undated criteria). If
   * true, all events are returned, ignoring start_date, end_date, and undated
   * criteria.
   */
  all_events: boolean;
  /**
   * List of context codes of courses, groups, users, or accounts whose events
   * you want to see. If not specified, defaults to the current user (i.e
   * personal calendar, no course/group events). Limited to 10 context codes,
   * additional ones are ignored. The format of this field is the context
   * type, followed by an underscore, followed by the context id. For example:
   * course_42
   */
  context_codes: string[];
  /**
   * Array of attributes to exclude. Possible values are "description",
   * "child_events" and "assignment"
   */
  excludes: string[];
  /**
   * Array of optional attributes to include. Possible values are
   * "web_conference" and "series_natural_language"
   */
  includes: string[];
  /**
   * Defaults to false. If true, only events with important dates set to true
   * will be returned.
   */
  important_dates: boolean;
  /**
   * Defaults to false. If true, only events with blackout date set to true
   * will be returned.
   */
  blackout_date: boolean;
};

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: listSearchParameters;
      strict: true;
    };

/**
 * List calendar events
 *
 * Retrieve the paginated list of calendar events or assignments for the current
 * user
 *
 * Nickname: list_calendar_events
 */
export async function list({ searchParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/calendar_events`, {
    method: 'GET',
    searchParams
  });
}
