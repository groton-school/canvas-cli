import { client } from '../../../../Client.js';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
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
 * Get content share
 *
 * Return information about a single content share. You may use +self+ as the
 * user_id to retrieve your own content share.
 *
 * Nickname: get_content_share
 */
export async function get(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
