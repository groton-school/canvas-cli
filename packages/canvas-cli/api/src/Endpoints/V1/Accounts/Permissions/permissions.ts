import { client } from '../../../../Client.js';

type permissionsPathParameters = {
  /** ID */
  account_id: string;
};

type permissionsSearchParameters = {
  /**
   * List of permissions to check against the authenticated user. Permission
   * names are documented in the {api:RoleOverridesController#add_role Create
   * a role} endpoint.
   */
  permissions: string[];
};

type Options = {
  pathParams: permissionsPathParameters;
  searchParams?: permissionsSearchParameters;
};

/**
 * Permissions
 *
 * Returns permission information for the calling user and the given account.
 * You may use `self` as the account id to check permissions against the domain
 * root account. The caller must have an account role or admin
 * (teacher/TA/designer) enrollment in a course in the account.
 *
 * See also the {api:CoursesController#permissions Course} and
 * {api:GroupsController#permissions Group} counterparts.
 *
 * Nickname: permissions
 */
export async function permissions({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/permissions`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
