import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { CalendarEvent } from '../../../Resources/CalendarEvents.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Defaults to &quot;event&quot;
     *
     *
     *
     *
     */
    type: string;
    /**
     * Only return events since the start_date (inclusive).
Defaults to today. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     *
     * format: date
     *
     * 
     */
    start_date: string;
    /**
     * Only return events before the end_date (inclusive).
Defaults to start_date. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
If end_date is the same as start_date, then only events on that day are
returned.
     *
     * format: date
     *
     * 
     */
    end_date: string;
    /**
     * Defaults to false (dated events only).
If true, only return undated events and ignore start_date and end_date.
     *
     * type: boolean
     *
     * 
     */
    undated: boolean | string;
    /**
     * Defaults to false (uses start_date, end_date, and undated criteria).
If true, all events are returned, ignoring start_date, end_date, and undated criteria.
     *
     * type: boolean
     *
     * 
     */
    all_events: boolean | string;
    /**
     * List of context codes of courses, groups, users, or accounts whose events you want to see.
If not specified, defaults to the current user (i.e personal calendar,
no course/group events). Limited to 10 context codes, additional ones are
ignored. The format of this field is the context type, followed by an
underscore, followed by the context id. For example: course_42
     *
     * 
     *
     * 
     */
    context_codes: string[];
    /**
     * Array of attributes to exclude. Possible values are &quot;description&quot;, &quot;child_events&quot; and &quot;assignment&quot;
     *
     *
     *
     *
     */
    excludes: string[];
    /**
     * Array of optional attributes to include. Possible values are &quot;web_conference&quot; and &quot;series_natural_language&quot;
     *
     *
     *
     *
     */
    includes: string[];
    /**
     * Defaults to false.
If true, only events with important dates set to true will be returned.
     *
     * type: boolean
     *
     * 
     */
    important_dates: boolean | string;
    /**
     * Defaults to false.
If true, only events with blackout date set to true will be returned.
     *
     * type: boolean
     *
     * 
     */
    blackout_date: boolean | string;
  }>;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List calendar events
 *
 * Retrieve the paginated list of calendar events or assignments for the current user
 *
 * nickname: list_calendar_events
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<CalendarEvent[]>(
    `/api/v1/calendar_events`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
