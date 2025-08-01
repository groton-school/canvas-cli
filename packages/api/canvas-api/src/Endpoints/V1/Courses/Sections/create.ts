import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
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
   *
   * Type: boolean
   */
  'course_section[restrict_enrollments_to_section_dates]': boolean | string;
  /**
   * When true, will first try to re-activate a deleted section with matching
   * sis_section_id if possible.
   *
   * Type: boolean
   */
  enable_sis_reactivation: boolean | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create course section
 *
 * Creates a new section for this course.
 *
 * Nickname: create_course_section
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Section>(
    `/api/v1/courses/{course_id}/sections`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
