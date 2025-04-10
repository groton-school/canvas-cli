import { client } from '../../../../Client.js';

export type permissionsPathParameters = {
  /** ID */
  course_id: string;
};

export type permissionsSearchParameters = {
  /**
   * List of permissions to check against the authenticated user. Permission
   * names are documented in the {api:RoleOverridesController#add_role Create
   * a role} endpoint.
   */
  permissions: string[];
};

type Options = {
  pathParams: permissionsPathParameters;
} & (
  | {
      searchParams?: Partial<permissionsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: permissionsSearchParameters;
      strict: true;
    }
);

/**
 * Permissions
 *
 * Returns permission information for the calling user in the given course. See
 * also the {api:AccountsController#permissions Account} and
 * {api:GroupsController#permissions Group} counterparts.
 *
 * Nickname: permissions
 */
export async function permissions({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/courses/{course_id}/permissions`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
