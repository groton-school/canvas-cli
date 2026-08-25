import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Section } from '../../../../Resources/Sections.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * - &quot;students&quot;: Associations to include with the group. Note: this is only
  available if you have permission to view users or grades in the course
- &quot;avatar_url&quot;: Include the avatar URLs for students returned.
- &quot;enrollments&quot;: If &#x27;students&#x27; is also included, return the section
  enrollment for each student
- &quot;total_students&quot;: Returns the total amount of active and invited students
  for the course section
- &quot;passback_status&quot;: Include the grade passback status.
- &quot;permissions&quot;: Include whether section grants :manage_calendar permission
  to the caller
     *
     * 
     *
     * 
     */
    include: string[];
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get section information
 *
 * Gets details about a specific section
 *
 * nickname: get_section_information_courses
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Section>(
    `/api/v1/courses/{course_id}/sections/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
