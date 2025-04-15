import { client } from '../../../Client.js';
import { Section } from '../../../Resources/Sections.js';

export type getPathParameters = {
  /** ID */
  id: string;
};

export type getSearchParameters = {
  /**
   * - "students": Associations to include with the group. Note: this is only
   *   available if you have permission to view users or grades in the course
   * - "avatar_url": Include the avatar URLs for students returned.
   * - "enrollments": If 'students' is also included, return the section
   *   enrollment for each student
   * - "total_students": Returns the total amount of active and invited students
   *   for the course section
   * - "passback_status": Include the grade passback status.
   * - "permissions": Include whether section grants :manage_calendar permission
   *   to the caller
   */
  include: string[];
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get section information
 *
 * Gets details about a specific section
 *
 * Nickname: get_section_information_sections
 */
export async function get(options: Options) {
  return await client().fetchAs<Section>(`/api/v1/sections/{id}`, {
    method: 'GET',
    ...options
  });
}
