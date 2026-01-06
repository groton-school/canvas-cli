import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type permissionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type permissionsSearchParameters = Masquerade &
  Partial<{
    /**
     * List of permissions to check against the authenticated user. Permission
     * names are documented in the
     * {api:RoleOverridesController#manageable_permissions List assignable
     * permissions} endpoint.
     */
    permissions: string[];
  }>;

type Options = {
  pathParams: permissionsPathParameters;
} & (
  | {
      searchParams?: Partial<permissionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: permissionsSearchParameters;
      strict: true;
    }
);

/**
 * Permissions
 *
 * Returns permission information for the calling user in the given group. See
 * also the {api:AccountsController#permissions Account} and
 * {api:CoursesController#permissions Course} counterparts.
 *
 * Nickname: permissions
 */
export async function permissions(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/permissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
