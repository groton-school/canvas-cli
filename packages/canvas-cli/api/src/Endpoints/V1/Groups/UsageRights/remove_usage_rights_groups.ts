import { client } from '../../../../Client.js';

export type remove_usage_rights_groupsPathParameters = {
  /** ID */
  group_id: string;
};

export type remove_usage_rights_groupsSearchParameters = {
  /** List of ids of files to remove associated usage rights from. */
  file_ids: string[];
  /**
   * List of ids of folders. Usage rights will be removed from all files in
   * these folders.
   */
  folder_ids: string[];
};

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
export async function remove_usage_rights_groups({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/usage_rights`, {
    method: 'DELETE',
    pathParams,
    searchParams
  });
}
