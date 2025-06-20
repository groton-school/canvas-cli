import { client } from '../../../../../Client.js';
import { ContentShare } from '../../../../../Resources/ContentShares.js';

export type add_users_to_content_sharePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type add_users_to_content_shareFormParameters = {
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
      params?: Partial<add_users_to_content_shareFormParameters>;
      strict?: false;
    }
  | {
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
