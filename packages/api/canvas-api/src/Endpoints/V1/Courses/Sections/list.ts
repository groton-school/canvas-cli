import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Section } from '../../../../Resources/Sections.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
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
    /**
     * When included, searches course sections for the term. Returns only
     * matching results. Term must be at least 2 characters.
     */
    search_term: string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List course sections
 *
 * A paginated list of the list of sections for this course.
 *
 * Nickname: list_course_sections
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Section[]>(
    `/api/v1/courses/{course_id}/sections`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
