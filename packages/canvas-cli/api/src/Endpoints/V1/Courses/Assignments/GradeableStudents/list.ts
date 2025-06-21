import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /** Assignments being requested */
    assignment_ids: string[];
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
 * List multiple assignments gradeable students
 *
 * A paginated list of students eligible to submit a list of assignments. The
 * caller must have permission to view grades for the requested course.
 *
 * Section-limited instructors will only see students in their own sections.
 *
 * Nickname: list_multiple_assignments_gradeable_students
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/gradeable_students`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
