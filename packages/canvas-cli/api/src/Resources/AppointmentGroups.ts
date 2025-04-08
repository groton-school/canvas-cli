import { CalendarEvent } from './CalendarEvents.js';

/** Date and time for an appointment */
export type Appointment = {
  /**
   * The appointment identifier.
   *
   * Type: integer
   */
  id: number;
  /**
   * Start time for the appointment
   *
   * Format: date-time
   */
  start_at: string;
  /**
   * End time for the appointment
   *
   * Format: date-time
   */
  end_at: string;
};

export type AppointmentGroup = {
  /**
   * The ID of the appointment group
   *
   * Type: integer
   */
  id: number;
  /** The title of the appointment group */
  title: string;
  /**
   * The start of the first time slot in the appointment group
   *
   * Format: date-time
   */
  start_at: string;
  /**
   * The end of the last time slot in the appointment group
   *
   * Format: date-time
   */
  end_at: string;
  /** The text description of the appointment group */
  description: string;
  /** The location name of the appointment group */
  location_name: string;
  /** The address of the appointment group's location */
  location_address: string;
  /**
   * The number of participant who have reserved slots (see include[] argument)
   *
   * Type: integer
   */
  participant_count: number;
  /**
   * The start and end times of slots reserved by the current user as well as
   * the id of the calendar event for the reservation (see include[] argument)
   */
  reserved_times: string[];
  /**
   * Boolean indicating whether observer users should be able to sign-up for an
   * appointment
   */
  allow_observer_signup: boolean;
  /**
   * The context codes (i.e. courses) this appointment group belongs to. Only
   * people in these courses will be eligible to sign up.
   */
  context_codes: string[];
  /**
   * The sub-context codes (i.e. course sections and group categories) this
   * appointment group is restricted to
   */
  sub_context_codes: string[];
  /**
   * Current state of the appointment group ('pending', 'active' or 'deleted').
   * 'pending' indicates that it has not been published yet and is invisible to
   * participants.
   */
  workflow_state: string;
  /**
   * Boolean indicating whether the current user needs to sign up for this
   * appointment group (i.e. it's reservable and the
   * min_appointments_per_participant limit has not been met by this user).
   */
  requiring_action: boolean;
  /**
   * Number of time slots in this appointment group
   *
   * Type: integer
   */
  appointments_count: number;
  /**
   * Calendar Events representing the time slots (see include[] argument) Refer
   * to the Calendar Events API for more information
   */
  appointments: string[];
  /**
   * Newly created time slots (same format as appointments above). Only returned
   * in Create/Update responses where new time slots have been added
   */
  new_appointments: string[];
  /**
   * Maximum number of time slots a user may register for, or null if no limit
   *
   * Type: integer
   */
  max_appointments_per_participant: number;
  /**
   * Minimum number of time slots a user must register for. If not set, users do
   * not need to sign up for any time slots
   *
   * Type: integer
   */
  min_appointments_per_participant: number;
  /**
   * Maximum number of participants that may register for each time slot, or
   * null if no limit
   *
   * Type: integer
   */
  participants_per_appointment: number;
  /**
   * 'private' means participants cannot see who has signed up for a particular
   * time slot, 'protected' means that they can
   */
  participant_visibility: string;
  /**
   * Indicates how participants sign up for the appointment group, either as
   * individuals ('User') or in student groups ('Group'). Related to
   * sub_context_codes (i.e. 'Group' signups always have a single group
   * category)
   */
  participant_type: string;
  /** URL for this appointment group (to update, delete, etc.) */
  url: string;
  /** URL for a user to view this appointment group */
  html_url: string;
  /**
   * When the appointment group was created
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * When the appointment group was last updated
   *
   * Format: date-time
   */
  updated_at: string;
};
