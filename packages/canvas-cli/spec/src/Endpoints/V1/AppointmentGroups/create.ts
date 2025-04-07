type Parameters = {
  /**
   * Array of context codes (courses, e.g. course_1) this group should be
   * linked to (1 or more). Users in the course(s) with appropriate
   * permissions will be able to sign up for this appointment group.
   */
  'appointment_group[context_codes]': string[];
  /**
   * Array of sub context codes (course sections or a single group category)
   * this group should be linked to. Used to limit the appointment group to
   * particular sections. If a group category is specified, students will sign
   * up in groups and the participant_type will be "Group" instead of "User".
   */
  'appointment_group[sub_context_codes]': string[];
  /** Short title for the appointment group. */
  'appointment_group[title]': string;
  /** Longer text description of the appointment group. */
  'appointment_group[description]': string;
  /** Location name of the appointment group. */
  'appointment_group[location_name]': string;
  /** Location address. */
  'appointment_group[location_address]': string;
  /**
   * Indicates whether this appointment group should be published (i.e. made
   * available for signup). Once published, an appointment group cannot be
   * unpublished. Defaults to false.
   */
  'appointment_group[publish]': boolean;
  /**
   * Maximum number of participants that may register for each time slot.
   * Defaults to null (no limit).
   *
   * Format: int64
   */
  'appointment_group[participants_per_appointment]': number;
  /**
   * Minimum number of time slots a user must register for. If not set, users
   * do not need to sign up for any time slots.
   *
   * Format: int64
   */
  'appointment_group[min_appointments_per_participant]': number;
  /**
   * Maximum number of time slots a user may register for.
   *
   * Format: int64
   */
  'appointment_group[max_appointments_per_participant]': number;
  /**
   * Nested array of start time/end time pairs indicating time slots for this
   * appointment group. Refer to the example request.
   */
  'appointment_group[new_appointments][X]': string[];
  /**
   * "private":: participants cannot see who has signed up for a particular
   * time slot "protected":: participants can see who has signed up. Defaults
   * to "private".
   */
  'appointment_group[participant_visibility]': string;
  /** Whether observer users can sign-up for an appointment. Defaults to false. */
  'appointment_group[allow_observer_signup]': boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create an appointment group
 *
 * Create and return a new appointment group. If new_appointments are specified,
 * the response will return a new_appointments array (same format as
 * appointments array, see "List appointment groups" action)
 *
 * Nickname: create_appointment_group
 */
export async function create({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/appointment_groups`, { method: 'POST', body: parameters })
  ).json();
}
