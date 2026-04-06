import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { BasicUser } from '../../../../../../Resources/Assignments.js';

export type listPathParameters = {
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
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

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
 * List group members for a student on an assignment
 *
 * Returns student ids and names for the group.
 *
 * Nickname: list_group_members_for_student_on_assignment
 */
export async function list(options: Options) {
  const response = await client().fetchAs<BasicUser[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/users/{user_id}/group_members`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
