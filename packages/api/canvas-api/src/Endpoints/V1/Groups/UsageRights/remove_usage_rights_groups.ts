import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

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

type Options = {
  pathParams: remove_usage_rights_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<remove_usage_rights_groupsSearchParameters>;
      strict?: false;
    }
  | {
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
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/usage_rights`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
