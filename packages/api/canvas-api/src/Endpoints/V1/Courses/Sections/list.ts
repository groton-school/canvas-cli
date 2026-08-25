import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Section } from '../../../../Resources/Sections.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
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
    /**
     * When included, searches course sections for the term. Returns only matching
results. Term must be at least 2 characters.
     *
     * 
     *
     * 
     */
    search_term: string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List course sections
 *
 * A paginated list of the list of sections for this course.
 *
 * nickname: list_course_sections
 *
 *
 *
 *
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
