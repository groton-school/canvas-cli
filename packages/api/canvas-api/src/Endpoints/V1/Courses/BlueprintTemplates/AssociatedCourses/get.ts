import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Course } from '../../../../../Resources/Courses.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  template_id: string | number;
};

export type getSearchParameters = Masquerade & Paginated;

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
 * Get associated course information
 *
 * Returns a list of courses that are configured to receive updates from this
 * blueprint
 *
 * Nickname: get_associated_course_information
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Course[]>(
    `/api/v1/courses/{course_id}/blueprint_templates/{template_id}/associated_courses`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
