export type CourseEventLink = {
  /**
   * ID of the course for the event.
   *
   * Type: integer
   */
  course: number | string;
  /**
   * ID of the user for the event (who made the change).
   *
   * Type: integer
   */
  user: number | string;
  /** ID of the page view during the event if it exists. */
  page_view: string;
  /**
   * ID of the course that this course was copied from. This is only included if
   * the event_type is copied_from.
   *
   * Type: integer
   */
  copied_from: number | string;
  /**
   * ID of the course that this course was copied to. This is only included if
   * the event_type is copied_to.
   *
   * Type: integer
   */
  copied_to: number | string;
  /**
   * ID of the SIS batch that triggered the event.
   *
   * Type: integer
   */
  sis_batch: number | string;
};

export type CourseEvent = {
  /** ID of the event. */
  id: string;
  /**
   * Timestamp of the event
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * Course event type The event type defines the type and schema of the
   * event_data object.
   */
  event_type: string;
  /**
   * Course event data depending on the event type. This will return an object
   * containing the relevant event data. An updated event type will return an
   * UpdatedEventData object.
   */
  event_data: string;
  /**
   * Course event source depending on the event type. This will return a string
   * containing the source of the event.
   */
  event_source: string;
  /** Jsonapi.org links */
  links: CourseEventLink;
};

/**
 * The created event data object returns all the fields that were set in the
 * format of the following example. If a field does not exist it was not set.
 * The value of each field changed is in the format of [:old_value, :new_value].
 * The created event type also includes a created_source field to specify what
 * triggered the creation of the course.
 */
export type CreatedEventData = {
  name: string[];
  start_at: string[];
  conclude_at: string[];
  is_public: boolean | string[];
  /** The type of action that triggered the creation of the course. */
  created_source: string;
};

/**
 * The updated event data object returns all the fields that have changed in the
 * format of the following example. If a field does not exist it was not
 * changed. The value is an array that contains the before and after values for
 * the change as in [:old_value, :new_value].
 */
export type UpdatedEventData = {
  name: string[];
  start_at: string[];
  conclude_at: string[];
  is_public: boolean | string[];
};
