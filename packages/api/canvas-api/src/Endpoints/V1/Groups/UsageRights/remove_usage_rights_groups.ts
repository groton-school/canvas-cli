import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type remove_usage_rights_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type remove_usage_rights_groupsSearchParameters = Masquerade &
  Partial<{
    /** List of ids of files to remove associated usage rights from. */
    file_ids: string[];
    /**
     * List of ids of folders. Usage rights will be removed from all files in
     * these folders.
     */
    folder_ids: string[];
  }>;

type Options = (
  | {
      path: remove_usage_rights_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_usage_rights_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_usage_rights_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<remove_usage_rights_groupsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<remove_usage_rights_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: remove_usage_rights_groupsSearchParameters;
        strict: true;
      }
  );

/**
 * Remove usage rights
 *
 * Removes copyright and license information associated with one or more files
 *
 * Nickname: remove_usage_rights_groups
 */
export async function remove_usage_rights_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/usage_rights`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
