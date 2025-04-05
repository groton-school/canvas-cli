export type Section = {
  /**
   * The unique identifier for the section.
   *
   * Type: integer
   */
  id: number;
  /** The name of the section. */
  name: string;
  /**
   * The sis id of the section. This field is only included if the user has
   * permission to view SIS information.
   */
  sis_section_id: string;
  /**
   * Optional: The integration ID of the section. This field is only included if
   * the user has permission to view SIS information.
   */
  integration_id: string;
  /**
   * The unique identifier for the SIS import if created through SIS. This field
   * is only included if the user has permission to manage SIS information.
   *
   * Type: integer
   */
  sis_import_id: number;
  /**
   * The unique Canvas identifier for the course in which the section belongs
   *
   * Type: integer
   */
  course_id: number;
  /**
   * The unique SIS identifier for the course in which the section belongs. This
   * field is only included if the user has permission to view SIS information.
   */
  sis_course_id: string;
  /**
   * The start date for the section, if applicable
   *
   * Format: 'date-time'
   */
  start_at: string;
  /**
   * The end date for the section, if applicable
   *
   * Format: 'date-time'
   */
  end_at: string;
  /** Restrict user enrollments to the start and end dates of the section */
  restrict_enrollments_to_section_dates: boolean;
  /**
   * The unique identifier of the original course of a cross-listed section
   *
   * Type: integer
   */
  nonxlist_course_id: number;
  /**
   * Optional: the total number of active and invited students in the section
   *
   * Type: integer
   */
  total_students: number;
};
