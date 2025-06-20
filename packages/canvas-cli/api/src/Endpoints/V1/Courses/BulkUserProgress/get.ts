import { client } from '../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
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
 * Get bulk user progress
 *
 * Returns progress information for all users enrolled in the given course.
 *
 * You must be a user who has permission to view all grades in the course (such
 * as a teacher or administrator).
 *
 * Nickname: get_bulk_user_progress
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/bulk_user_progress`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
