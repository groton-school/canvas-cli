import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get quota information
 *
 * Returns the total and used storage quota for the course, group, or user.
 *
 * Nickname: get_quota_information_groups
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/files/quota`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
