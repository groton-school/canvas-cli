import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

type Parameters = {
  /** The name of the section */
  'course_section[name]': string;
  /**
   * The sis ID of the section. Must have manage_sis permission to set. This
   * is ignored if caller does not have permission to set.
   */
  'course_section[sis_section_id]': string;
  /**
   * The integration_id of the section. Must have manage_sis permission to
   * set. This is ignored if caller does not have permission to set.
   */
  'course_section[integration_id]': string;
  /**
   * Section start date in ISO8601 format, e.g. 2011-01-01T01:00Z
   *
   * Format: date-time
   */
  'course_section[start_at]': string;
  /**
   * Section end date in ISO8601 format. e.g. 2011-01-01T01:00Z
   *
   * Format: date-time
   */
  'course_section[end_at]': string;
  /**
   * Set to true to restrict user enrollments to the start and end dates of
   * the section.
   */
  'course_section[restrict_enrollments_to_section_dates]': boolean;
  /**
   * When true, will first try to re-activate a deleted section with matching
   * sis_section_id if possible.
   */
  enable_sis_reactivation: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create course section
 *
 * Creates a new section for this course.
 *
 * Nickname: create_course_section
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<Section>(`/v1/courses/{course_id}/sections`, {
    method: 'POST',
    params: parameters
  });
}
