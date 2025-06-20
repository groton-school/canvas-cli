import { client } from '../../../Client.js';
import { Group } from '../../../Resources/Groups.js';

export type updatePathParameters = {
  /** ID */
  group_id: string;
};

export type updateFormParameters = {
  /** The name of the group */
  name: string;
  /** A description of the group */
  description: string;
  /**
   * Whether the group is public (applies only to community groups). Currently
   * you cannot set a group back to private once it has been made public.
   */
  is_public: boolean;
  /** No description */
  join_level: string;
  /**
   * The id of the attachment previously uploaded to the group that you would
   * like to use as the avatar image for this group.
   *
   * Format: 'int64'
   */
  avatar_id: number;
  /**
   * The allowed file storage for the group, in megabytes. This parameter is
   * ignored if the caller does not have the manage_storage_quotas
   * permission.
   *
   * Format: 'int64'
   */
  storage_quota_mb: number;
  /**
   * An array of user ids for users you would like in the group. Users not in
   * the group will be sent invitations. Existing group members who aren't in
   * the list will be removed from the group.
   */
  members: string[];
  /** The sis ID of the group. Must have manage_sis permission to set. */
  sis_group_id: string;
  /**
   * Default is true. If false, any fields containing “sticky” changes will
   * not be updated. See SIS CSV Format documentation for information on which
   * fields can have SIS stickiness
   */
  override_sis_stickiness: boolean;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Edit a group
 *
 * Modifies an existing group. Note that to set an avatar image for the group,
 * you must first upload the image file to the group, and the use the id in the
 * response as the argument to this function. See the {file:file_uploads.html
 * File Upload Documentation} for details on the file upload workflow.
 *
 * Nickname: edit_group
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Group>(`/api/v1/groups/{group_id}`, {
    method: 'PUT',
    ...options
  });
  return response;
}
