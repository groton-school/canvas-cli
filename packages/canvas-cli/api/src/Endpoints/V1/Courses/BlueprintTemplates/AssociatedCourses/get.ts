import { client } from '../../../../../Client.js';
import { Course } from '../../../../../Resources/Courses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get associated course information
 *
 * Returns a list of courses that are configured to receive updates from this
 * blueprint
 *
 * Nickname: get_associated_course_information
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/blueprint_templates/{template_id}/associated_courses`,
    {
      method: 'GET',
      pathParams
    }
  );
}
