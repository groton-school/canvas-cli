import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Permission } from '../../../../../Resources/Roles.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If provided, return only permissions whose key, label, group, or
     * group_label match the search string.
     */
    search_term: string;
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
 * List assignable permissions
 *
 * List all permissions that can be granted to roles in the given account.
 *
 * This returns largely the same information documented on the
 * {file:file.permissions.html Permissions list page}, with a few caveats:
 * Permission labels and group labels returned by this API are localized (the
 * same text visible in the web UI). This API includes permissions added by
 * plugins. This API excludes permissions that are disabled in or otherwise do
 * not apply to the given account.
 *
 * Nickname: list_assignable_permissions
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Permission[]>(
    `/api/v1/accounts/{account_id}/roles/permissions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
