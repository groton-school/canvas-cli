import {
  DateTimeString,
  HTMLString,
  ListOf,
  URLString
} from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import ora from 'ora';
import * as Assignments from './Assignments.js';
import { canvas, stringify } from './Client.js';
import * as Courses from './Courses.js';
import { isError } from './Error.js';

export type Model = {
  /** The ID of the calendar event */
  id: number;
  /** The title of the calendar event */
  title: string;
  /** The start timestamp of the event */
  start_at: DateTimeString<'ISO'>;
  /** The end timestamp of the event */
  end_at: DateTimeString<'ISO'>;
  /** The HTML description of the event */
  description: HTMLString;
  /** The location name of the event */
  location_name: string;
  /** The address where the event is taking place */
  location_address: string;
  /** the context code of the calendar this event belongs to (course, group, user,
   * or account) */
  context_code: string;
  /** if specified, it indicates which calendar this event should be displayed on.
   * for example, a section-level event would have the course's context code here,
   * while the section's context code would be returned above) */
  effective_context_code: string | null;
  /** the context name of the calendar this event belongs to (course, user or
   * group) */
  context_name: string;
  /** a comma-separated list of all calendar contexts this event is part of */
  all_context_codes: ListOf<string, ','>;
  /** Current state of the event ('active', 'locked' or 'deleted') 'locked'
   * indicates that start_at/end_at cannot be changed (though the event could be
   * deleted). Normally only reservations or time slots with reservations are
   * locked (see the Appointment Groups API) */
  workflow_state: 'active' | 'locked' | 'deleted';
  /** Whether this event should be displayed on the calendar. Only true for
   * course-level events with section-level child events. */
  hidden: boolean;
  /** Normally null. If this is a reservation (see the Appointment Groups API), the
   * id will indicate the time slot it is for. If this is a section-level event,
   * this will be the course-level parent event. */
  parent_event_id: number | null;
  /** The number of child_events. See child_events (and parent_event_id) */
  child_events_count: number;
  /** Included by default, but may be excluded (see include[] option). If this is a
   * time slot (see the Appointment Groups API) this will be a list of any
   * reservations. If this is a course-level event, this will be a list of
   * section-level events (if any) */
  child_events: number | null;
  /** URL for this calendar event (to update, delete, etc.) */
  url: URLString;
  /** URL for a user to view this event */
  html_url: URLString;
  /** The date of this event */
  all_day_date: DateTimeString<'YYYY-MM-DD'>;
  /** Boolean indicating whether this is an all-day event (midnight to midnight) */
  all_day: boolean;
  /** When the calendar event was created */
  created_at: DateTimeString<'iSO'>;
  /** When the calendar event was last updated */
  updated_at: DateTimeString<'ISO'>;
  /** Various Appointment-Group-related fields.These fields are only pertinent to
   * time slots (appointments) and reservations of those time slots. See the
   * Appointment Groups API. The id of the appointment group */
  appointment_group_id: number | null;
  /** The API URL of the appointment group */
  appointment_group_url: number | null;
  /** If the event is a reservation, this a boolean indicating whether it is the
   * current user's reservation, or someone else's */
  own_reservation: boolean;
  /** If the event is a time slot, the API URL for reserving it */
  reserve_url: URLString | null;
  /** If the event is a time slot, a boolean indicating whether the user has
   * already made a reservation for it */
  reserved: boolean;
  /** The type of participant to sign up for a slot: 'User' or 'Group' */
  participant_type: 'User' | 'Group';
  /** If the event is a time slot, this is the participant limit */
  participants_per_appointment: number | null;
  /** If the event is a time slot and it has a participant limit, an integer
   * indicating how many slots are available */
  available_slots: number | null;
  /** If the event is a user-level reservation, this will contain the user
   * participant JSON (refer to the Users API). */
  user: any;
  /** If the event is a group-level reservation, this will contain the group
   * participant JSON (refer to the Groups API). */
  group: any;
  /** Boolean indicating whether this has important dates. */
  important_dates: boolean;
  /** Identifies the recurring event series this event may belong to. */
  series_uuid: string | null;
  /** An iCalendar RRULE for defining how events in a recurring event series
   * repeat. */
  rrule: string | null;
  /** Boolean indicating if is the first event in the series of recurring events. */
  series_head: boolean | null;
  /** A natural language expression of how events occur in the series. */
  series_natural_language: string;
  /** Boolean indicating whether this has blackout date. */
  blackout_date: boolean;
};

export type AssignmentEvent = {
  /** A synthetic ID for the assignment */
  id: string;
  /** The title of the assignment */
  title: string;
  /** The due_at timestamp of the assignment */
  start_at: DateTimeString<'ISO'>;
  /** The due_at timestamp of the assignment */
  end_at: DateTimeString<'ISO'>;
  /** The HTML description of the assignment */
  description: HTMLString;
  /** the context code of the (course) calendar this assignment belongs to */
  context_code: string;
  /** Current state of the assignment ('published' or 'deleted') */
  workflow_state: 'published' | 'deleted';
  /** URL for this assignment (note that updating/deleting should be done via the
   * Assignments API) */
  url: URLString;
  /** URL for a user to view this assignment */
  html_url: URLString;
  /** The due date of this assignment */
  all_day_date: DateTimeString<'YYYY-MM-DD'>;
  /** Boolean indicating whether this is an all-day event (e.g. assignment due at
   * midnight) */
  all_day: boolean;
  /** When the assignment was created */
  created_at: DateTimeString<'ISO'>;
  /** When the assignment was last updated */
  updated_at: DateTimeString<'ISO'>;
  /** The full assignment JSON data (See the Assignments API) */
  assignment: Assignments.Model;
  /** The list of AssignmentOverrides that apply to this event (See the Assignments
   * API). This information is useful for determining which students or sections
   * this assignment-due event applies to. */
  assignment_overrides: Assignments.AssignmentOverride[];
  /** Boolean indicating whether this has important dates. */
  important_dates: boolean;
  /** An iCalendar RRULE for defining how events in a recurring event series
   * repeat. */
  rrule: string;
  /** True if this is the first event in the series of recurring events. */
  series_head: boolean | null;
  /** A natural language expression of how events occur in the series. */
  series_natural_language: string;
};

type Parameters = {
  /** Context code of the course, group, user, or account whose calendar this event should be added to. */
  'calendar_event[context_code]': string;
  /** Short title for the calendar event. */
  'calendar_event[title]'?: string;
  /** Longer HTML description of the event. */
  'calendar_event[description]'?: string;
  /** Start date/time of the event. */
  'calendar_event[start_at]'?: DateTimeString;
  /** End date/time of the event. */
  'calendar_event[end_at]'?: DateTimeString;
  /** Location name of the event. */
  'calendar_event[location_name]'?: string;
  /** Location address */
  'calendar_event[location_address]'?: string;
  /** Time zone of the user editing the event. Allowed time zones are IANA time zones or friendlier Ruby on Rails time zones. */
  'calendar_event[time_zone_edited]'?: string;
  /** When true event is considered to span the whole day and times are ignored. */
  'calendar_event[all_day]'?: boolean;
  /** Section-level start time(s) if this is a course event. X can be any identifier, provided that it is consistent across the start_at, end_at and context_code */
  'calendar_event[child_event_data][X][start_at]'?: DateTimeString;
  /** Section-level end time(s) if this is a course event. */
  'calendar_event[child_event_data][X][end_at]'?: DateTimeString;
  /** Context code(s) corresponding to the section-level start and end time(s). */
  'calendar_event[child_event_data][X][context_code]'?: string;
  /** Number of times to copy/duplicate the event. Count cannot exceed 200. */
  'calendar_event[duplicate][count]'?: number;
  /** Defaults to 1 if duplicate ‘count` is set. The interval between the duplicated events. */
  'calendar_event[duplicate][interval]'?: number;
  /** Defaults to “weekly”. The frequency at which to duplicate the event

Allowed values:
daily, weekly, monthly */
  'calendar_event[duplicate][frequency]'?: 'daily' | 'weekly' | 'monthly';
  /** Defaults to false. If set to ‘true`, an increasing counter number will be appended to the event title when the event is duplicated. (e.g. Event 1, Event 2, Event 3, etc) */
  'calendar_event[duplicate][append_iterator]'?: boolean;
  /** The recurrence rule to create a series of recurring events. Its value is the iCalendar RRULE defining how the event repeats. Unending series not supported. */
  'calendar_event[rrule]'?: string;
  /** If the blackout_date is true, this event represents a holiday or some other special day that does not count in course pacing. */
  'calendar_event[blackout_date]'?: boolean;
};

type CreateOptions = {
  course: Courses.Model;
  args: Parameters;
};

export async function create({ course, args }: CreateOptions) {
  const spinner = ora(
    `Creating calendar event ${Colors.value(args['calendar_event[title]'])}`
  ).start();
  const result = (await canvas().fetch('/api/v1/calendar_events', {
    method: 'POST',
    body: new URLSearchParams(stringify(args))
  })) as Model;
  if (isError(result)) {
    spinner.fail(
      `Error creating calendar event ${Colors.value(args['calendar_event[title]'])}`
    );
    throw new Error(
      `Error creating calendar event: ${Log.syntaxColor({ ...Courses.basic(course), args: stringify(args), error: result })}`
    );
  }
  spinner.succeed(`Created calendar event ${Colors.value(result.title)}`);
  return result;
}
