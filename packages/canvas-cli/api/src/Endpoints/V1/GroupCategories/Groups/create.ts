import { client } from '../../../../Client.js';
import { Group } from '../../../../Resources/Groups.js';

type Parameters = {
  /** The name of the group */
  name: string;
  /** A description of the group */
  description: string;
  /** Whether the group is public (applies only to community groups) */
  is_public: boolean;
  /** No description */
  join_level: string;
  /**
   * The allowed file storage for the group, in megabytes. This parameter is
   * ignored if the caller does not have the manage_storage_quotas
   * permission.
   *
   * Format: 'int64'
   */
  storage_quota_mb: number;
  /** The sis ID of the group. Must have manage_sis permission to set. */
  sis_group_id: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a group
 *
 * Creates a new group. Groups created using the "/api/v1/groups/" endpoint will
 * be community groups.
 *
 * Nickname: create_group_group_categories
 */
export async function create({ parameters }: Options) {
  return await client().fetchAs<Group>(
    `/v1/group_categories/{group_category_id}/groups`,
    { method: 'POST', params: parameters }
  );
}
