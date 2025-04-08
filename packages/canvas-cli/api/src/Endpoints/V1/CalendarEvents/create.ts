import { client } from '../../../Client.js';

type Parameters = {
  /**
   * Context code of the course, group, user, or account whose calendar this
   * event should be added to.
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
  /** Number of times to copy/duplicate the event. Count cannot exceed 200. */
  'calendar_event[duplicate][count]': number;
  /**
   * Defaults to 1 if duplicate `count` is set. The interval between the
   * duplicated events.
   */
  'calendar_event[duplicate][interval]': number;
  /** Defaults to "weekly". The frequency at which to duplicate the event */
  'calendar_event[duplicate][frequency]': string;
  /**
   * Defaults to false. If set to `true`, an increasing counter number will be
   * appended to the event title when the event is duplicated. (e.g. Event 1,
   * Event 2, Event 3, etc)
   */
  'calendar_event[duplicate][append_iterator]': boolean;
  /**
   * The recurrence rule to create a series of recurring events. Its value is
   * the
   * {https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html
   * iCalendar RRULE} defining how the event repeats. Unending series not
   * supported.
   */
  'calendar_event[rrule]': string;
  /**
   * If the blackout_date is true, this event represents a holiday or some
   * other special day that does not count in course pacing.
   */
  'calendar_event[blackout_date]': boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a calendar event
 *
 * Create and return a new calendar event
 *
 * Nickname: create_calendar_event
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/calendar_events`, {
    method: 'POST',
    params: parameters
  });
}
