import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** The name of the group */
  name: string;
  /** A description of the group */
  description: string;
  /**
   * Whether the group is public (applies only to community groups)
   *
   * Type: boolean
   */
  is_public: boolean | string;
  /** No description */
  join_level: string;
  /**
   * The allowed file storage for the group, in megabytes. This parameter is
   * ignored if the caller does not have the manage_storage_quotas
   * permission.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  storage_quota_mb: number | string;
  /** The sis ID of the group. Must have manage_sis permission to set. */
  sis_group_id: string;
};

type Options =
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    };

/**
 * Create a group
 *
 * Creates a new group. Groups created using the "/api/v1/groups/" endpoint will
 * be community groups.
 *
 * Nickname: create_group_groups
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Group>(`/api/v1/groups`, {
    method: 'POST',
    ...options
  });
  return response;
}
