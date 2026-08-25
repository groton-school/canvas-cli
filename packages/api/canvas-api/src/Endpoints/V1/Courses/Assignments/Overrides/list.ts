import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  assignment_id: string | number;
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
 * List assignment overrides
 *
 * Returns the paginated list of overrides for this assignment that target
sections/groups/students visible to the current user.
 *
 * nickname: list_assignment_overrides
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AssignmentOverride[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/overrides`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
