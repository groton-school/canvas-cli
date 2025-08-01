import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * IDs of users to share the content with.
   *
   * Array
   */
  receiver_ids: string[];
  /** Type of content you are sharing. */
  content_type: string;
  /**
   * The id of the content that you are sharing
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  content_id: number | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a content share
 *
 * Share content directly between two or more users
 *
 * Nickname: create_content_share
 */
export async function create(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
