import { client } from '../../../../Client.js';
import { CalendarEvent } from '../../../../Resources/CalendarEvents.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

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
   * When type is "assignment", specifies the allowable submission types for
   * returned assignments. Ignored if type is not "assignment" or if
   * exclude_submission_types is provided.
   */
  submission_types: string[];
  /**
   * When type is "assignment", specifies the submission types to be excluded
   * from the returned assignments. Ignored if type is not "assignment".
   */
  exclude_submission_types: string[];
  /**
   * Array of optional attributes to include. Possible values are
   * "web_conference" and "series_natural_language"
   */
  includes: string[];
  /**
   * Defaults to false If true, only events with important dates set to true
   * will be returned.
   */
  important_dates: boolean;
  /**
   * Defaults to false If true, only events with blackout date set to true
   * will be returned.
   */
  blackout_date: boolean;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List calendar events for a user
 *
 * Retrieve the paginated list of calendar events or assignments for the
 * specified user. To view calendar events for a user other than yourself, you
 * must either be an observer of that user or an administrator.
 *
 * Nickname: list_calendar_events_for_user
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/calendar_events`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
