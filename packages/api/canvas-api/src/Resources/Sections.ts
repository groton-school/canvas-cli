import { JSONValue } from '@battis/typescript-tricks';
import { User } from './Users.js';

/**
 *
 */
export type Section = {
  /**
   * The unique identifier for the section.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The name of the section.
   *
   *
   */
  name: string;
  /**
   * The sis id of the section. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  sis_section_id: string;
  /**
   * Optional: The integration ID of the section. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  integration_id: string;
  /**
   * The unique identifier for the SIS import if created through SIS. This field is only included if the user has permission to manage SIS information.
   *
   * type: integer
   */
  sis_import_id: number | string;
  /**
   * The unique Canvas identifier for the course in which the section belongs
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * The unique SIS identifier for the course in which the section belongs. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  sis_course_id: string;
  /**
   * the start date for the section, if applicable
   *
   * format: date-time
   */
  start_at: string;
  /**
   * the end date for the section, if applicable
   *
   * format: date-time
   */
  end_at: string;
  /**
   * Restrict user enrollments to the start and end dates of the section
   *
   * type: boolean
   */
  restrict_enrollments_to_section_dates: boolean | string;
  /**
   * The unique identifier of the original course of a cross-listed section
   *
   * type: integer
   */
  nonxlist_course_id: number | string;
  /**
   * optional: the total number of active and invited students in the section
   *
   * type: integer
   */
  total_students: number | string;
  /**
   * optional: A list of students that are included in the section. Returned only if include[]=students. WARNING: this collection's size is capped (if there are an extremely large number of users in the section (thousands) not all of them will be returned). If you need to capture all the users in a section with certainty or experiencing slow response consider using the paginated /api/v1/sections/<section_id>/users endpoint.
   *
   *
   */
  students: User[];
};
