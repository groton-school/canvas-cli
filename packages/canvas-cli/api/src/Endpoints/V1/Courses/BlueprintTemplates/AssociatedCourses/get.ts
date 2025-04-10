import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { Course } from '../../../../../Resources/Courses.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  template_id: string;
};

export type getSearchParameters = Paginated;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function get({ pathParams }: Options) {
  return await client().fetchAs<Course[]>(
    `/v1/courses/{course_id}/blueprint_templates/{template_id}/associated_courses`,
    {
      method: 'GET',
      pathParams
    }
  );
}
