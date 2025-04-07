import { uuid } from '';
import { Assignment, AssignmentOverride } from './Assignments.js';

export type CalendarEvent = {
  /**
   * The ID of the calendar event
   *
   * Type: integer
   */
  id: number;
  /** The title of the calendar event */
  title: string;
  /**
   * The start timestamp of the event
   *
   * Format: 'date-time'
   */
  start_at: string;
  /**
   * The end timestamp of the event
   *
   * Format: 'date-time'
   */
  end_at: string;
  /** The HTML description of the event */
  description: string;
  /** The location name of the event */
  location_name: string;
  /** The address where the event is taking place */
  location_address: string;
  /**
   * The context code of the calendar this event belongs to (course, group,
   * user, or account)
   */
  context_code: string;
  /**
   * If specified, it indicates which calendar this event should be displayed
   * on. for example, a section-level event would have the course's context code
   * here, while the section's context code would be returned above)
   */
  effective_context_code: string;
  /**
   * The context name of the calendar this event belongs to (course, user or
   * group)
   */
  context_name: string;
  /** A comma-separated list of all calendar contexts this event is part of */
  all_context_codes: string;
  /**
   * Current state of the event ('active', 'locked' or 'deleted') 'locked'
   * indicates that start_at/end_at cannot be changed (though the event could be
   * deleted). Normally only reservations or time slots with reservations are
   * locked (see the Appointment Groups API)
   */
  workflow_state: string;
  /**
   * Whether this event should be displayed on the calendar. Only true for
   * course-level events with section-level child events.
   */
  hidden: boolean;
  /**
   * Normally null. If this is a reservation (see the Appointment Groups API),
   * the id will indicate the time slot it is for. If this is a section-level
   * event, this will be the course-level parent event.
   *
   * Type: integer
   */
  parent_event_id: number;
  /**
   * The number of child_events. See child_events (and parent_event_id)
   *
   * Type: integer
   */
  child_events_count: number;
  /**
   * Included by default, but may be excluded (see include[] option). If this is
   * a time slot (see the Appointment Groups API) this will be a list of any
   * reservations. If this is a course-level event, this will be a list of
   * section-level events (if any)
   */
  child_events: string[];
  /** URL for this calendar event (to update, delete, etc.) */
  url: string;
  /** URL for a user to view this event */
  html_url: string;
  /**
   * The date of this event
   *
   * Format: 'date-time'
   */
  all_day_date: string;
  /** Boolean indicating whether this is an all-day event (midnight to midnight) */
  all_day: boolean;
  /**
   * When the calendar event was created
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * When the calendar event was last updated
   *
   * Format: 'date-time'
   */
  updated_at: string;
  /**
   * Various Appointment-Group-related fields.These fields are only pertinent to
   * time slots (appointments) and reservations of those time slots. See the
   * Appointment Groups API. The id of the appointment group
   *
   * Type: integer
   */
  appointment_group_id: number;
  /** The API URL of the appointment group */
  appointment_group_url: string;
  /**
   * If the event is a reservation, this a boolean indicating whether it is the
   * current user's reservation, or someone else's
   */
  own_reservation: boolean;
  /** If the event is a time slot, the API URL for reserving it */
  reserve_url: string;
  /**
   * If the event is a time slot, a boolean indicating whether the user has
   * already made a reservation for it
   */
  reserved: boolean;
  /** The type of participant to sign up for a slot: 'User' or 'Group' */
  participant_type: string;
  /**
   * If the event is a time slot, this is the participant limit
   *
   * Type: integer
   */
  participants_per_appointment: number;
  /**
   * If the event is a time slot and it has a participant limit, an integer
   * indicating how many slots are available
   *
   * Type: integer
   */
  available_slots: number;
  /**
   * If the event is a user-level reservation, this will contain the user
   * participant JSON (refer to the Users API).
   */
  user: string;
  /**
   * If the event is a group-level reservation, this will contain the group
   * participant JSON (refer to the Groups API).
   */
  group: string;
  /** Boolean indicating whether this has important dates. */
  important_dates: boolean;
  /** Identifies the recurring event series this event may belong to. */
  series_uuid: uuid;
  /**
   * An iCalendar RRULE for defining how events in a recurring event series
   * repeat.
   */
  rrule: string;
  /** Boolean indicating if is the first event in the series of recurring events. */
  series_head: boolean;
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
  /**
   * The due_at timestamp of the assignment
   *
   * Format: 'date-time'
   */
  start_at: string;
  /**
   * The due_at timestamp of the assignment
   *
   * Format: 'date-time'
   */
  end_at: string;
  /** The HTML description of the assignment */
  description: string;
  /** The context code of the (course) calendar this assignment belongs to */
  context_code: string;
  /** Current state of the assignment ('published' or 'deleted') */
  workflow_state: string;
  /**
   * URL for this assignment (note that updating/deleting should be done via the
   * Assignments API)
   */
  url: string;
  /** URL for a user to view this assignment */
  html_url: string;
  /**
   * The due date of this assignment
   *
   * Format: 'date-time'
   */
  all_day_date: string;
  /**
   * Boolean indicating whether this is an all-day event (e.g. assignment due at
   * midnight)
   */
  all_day: boolean;
  /**
   * When the assignment was created
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * When the assignment was last updated
   *
   * Format: 'date-time'
   */
  updated_at: string;
  /** The full assignment JSON data (See the Assignments API) */
  assignment: Assignment;
  /**
   * The list of AssignmentOverrides that apply to this event (See the
   * Assignments API). This information is useful for determining which students
   * or sections this assignment-due event applies to.
   */
  assignment_overrides: AssignmentOverride;
  /** Boolean indicating whether this has important dates. */
  important_dates: boolean;
  /**
   * An iCalendar RRULE for defining how events in a recurring event series
   * repeat.
   */
  rrule: string;
  /** Trueif this is the first event in the series of recurring events. */
  series_head: boolean;
  /** A natural language expression of how events occur in the series. */
  series_natural_language: string;
};
