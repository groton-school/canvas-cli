import { client } from '../../../../../Client.js';
import { UsedLocations } from '../../../../../Overrides.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

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
 * Get the courses and assignments for
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_courses_and_assignments_for_courses
 */
export async function get(options: Options) {
  return await client().fetchAs<UsedLocations>(
    `/api/v1/courses/{course_id}/rubrics/{id}/used_locations`,
    {
      method: 'GET',
      ...options
    }
  );
}
