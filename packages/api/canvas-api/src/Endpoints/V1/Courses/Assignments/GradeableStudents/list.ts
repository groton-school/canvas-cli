import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Partial<{
    /** Assignments being requested */
    assignment_ids: string[];
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/gradeable_students`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
