import { client } from '../../../../../Client.js';

type listPathParameters = {
  /** ID */
  course_id: string;
};

type listSearchParameters = {
  /** Assignments being requested */
  assignment_ids: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List multiple assignments gradeable students
 *
 * A paginated list of students eligible to submit a list of assignments. The
 * caller must have permission to view grades for the requested course.
 *
 * Section-limited instructors will only see students in their own sections.
 *
 * Nickname: list_multiple_assignments_gradeable_students
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/gradeable_students`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
