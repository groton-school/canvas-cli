import { client } from '../../../Client.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /**
   * Context code of the course, group, user, or account to move this event
   * to. Scheduler appointments and events with section-specific times cannot
   * be moved between calendars.
   */
  'calendar_event[context_code]': string;
  /** Short title for the calendar event. */
  'calendar_event[title]': string;
  /** Longer HTML description of the event. */
  'calendar_event[description]': string;
  /**
   * Start date/time of the event.
   *
   * Format: date-time
   */
  'calendar_event[start_at]': string;
  /**
   * End date/time of the event.
   *
   * Format: date-time
   */
  'calendar_event[end_at]': string;
  /** Location name of the event. */
  'calendar_event[location_name]': string;
  /** Location address */
  'calendar_event[location_address]': string;
  /**
   * Time zone of the user editing the event. Allowed time zones are
   * {http://www.iana.org/time-zones IANA time zones} or friendlier
   * {http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on
   * Rails time zones}.
   */
  'calendar_event[time_zone_edited]': string;
  /**
   * When true event is considered to span the whole day and times are
   * ignored.
   */
  'calendar_event[all_day]': boolean;
  /**
   * Section-level start time(s) if this is a course event. X can be any
   * identifier, provided that it is consistent across the start_at, end_at
   * and context_code
   *
   * Format: date-time
   */
  'calendar_event[child_event_data][X][start_at]': string;
  /**
   * Section-level end time(s) if this is a course event.
   *
   * Format: date-time
   */
  'calendar_event[child_event_data][X][end_at]': string;
  /** Context code(s) corresponding to the section-level start and end time(s). */
  'calendar_event[child_event_data][X][context_code]': string;
  /**
   * Valid if the event whose ID is in the URL is part of a series. This
   * defines the shape of the recurring event series after it's updated. Its
   * value is the iCalendar RRULE. Unending series are not supported.
   */
  'calendar_event[rrule]': string;
  /**
   * Valid if the event whose ID is in the URL is part of a series. Update
   * just the event whose ID is in in the URL, all events in the series, or
   * the given event and all those following. Some updates may create a new
   * series. For example, changing the start time of this and all following
   * events from the middle of a series.
   */
  which: string;
  /**
   * If the blackout_date is true, this event represents a holiday or some
   * other special day that does not count in course pacing.
   */
  'calendar_event[blackout_date]': boolean;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a calendar event
 *
 * Update and return a calendar event
 *
 * Nickname: update_calendar_event
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<void>(`/v1/calendar_events/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
