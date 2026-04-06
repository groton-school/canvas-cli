import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade;

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
 * List assignments for user
 *
 * Returns the paginated list of assignments for the specified user if the
 * current user has rights to view. See {api:AssignmentsApiController#index List
 * assignments} for valid arguments.
 *
 * Nickname: list_assignments_for_user
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/{user_id}/courses/{course_id}/assignments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
