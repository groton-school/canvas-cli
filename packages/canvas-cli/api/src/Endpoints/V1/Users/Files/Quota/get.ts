import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get quota information
 *
 * Returns the total and used storage quota for the course, group, or user.
 *
 * Nickname: get_quota_information_users
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(`/api/v1/users/{user_id}/files/quota`, {
    method: 'GET',
    ...options
  });
}
