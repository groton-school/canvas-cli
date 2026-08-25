import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type permissionsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type permissionsSearchParameters = Masquerade &
  Partial<{
    /**
     * List of permissions to check against the authenticated user.
Permission names are documented in the {api:RoleOverridesController#manageable_permissions List assignable permissions} endpoint.
     *
     * 
     *
     * 
     */
    permissions: string[];
  }>;

type Options = (
  | {
      path: permissionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: permissionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<permissionsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<permissionsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: permissionsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: permissionsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Permissions
 *
 * Returns permission information for the calling user in the given course.
See also the {api:AccountsController#permissions Account} and
{api:GroupsController#permissions Group} counterparts.
 *
 * nickname: permissions
 *
 * 
 *
 * 
 */
export async function permissions(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/permissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
