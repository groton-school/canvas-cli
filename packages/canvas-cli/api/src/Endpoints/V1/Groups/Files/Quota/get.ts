import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get quota information
 *
 * Returns the total and used storage quota for the course, group, or user.
 *
 * Nickname: get_quota_information_groups
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/groups/{group_id}/files/quota`, {
    method: 'GET',
    pathParams
  });
}
