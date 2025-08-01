import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { ContentShare } from '../../../../../Resources/ContentShares.js';

export type add_users_to_content_sharePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type add_users_to_content_shareSearchParameters = Masquerade;

export type add_users_to_content_shareFormParameters = Masquerade & {
  /**
   * IDs of users to share the content with.
   *
   * Array
   */
  receiver_ids: string[];
};

type Options = {
  pathParams: add_users_to_content_sharePathParameters;
} & (
  | {
      searchParams?: Partial<add_users_to_content_shareSearchParameters>;
      params?: Partial<add_users_to_content_shareFormParameters>;
      strict?: false;
    }
  | {
      searchParams: add_users_to_content_shareSearchParameters;
      params: add_users_to_content_shareFormParameters;
      strict: true;
    }
);

/**
 * Add users to content share
 *
 * Send a previously created content share to additional users
 *
 * Nickname: add_users_to_content_share
 */
export async function add_users_to_content_share(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares/{id}/add_users`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
