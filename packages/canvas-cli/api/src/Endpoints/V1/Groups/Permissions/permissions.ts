import { client } from '../../../../Client.js';

export type permissionsPathParameters = {
  /** ID */
  group_id: string;
};

export type permissionsSearchParameters = Partial<{
  /**
   * List of permissions to check against the authenticated user. Permission
   * names are documented in the {api:RoleOverridesController#add_role Create
   * a role} endpoint.
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
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/permissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
