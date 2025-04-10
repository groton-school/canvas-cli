import { client } from '../../../../Client.js';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type createPathParameters = {
  /** ID */
  user_id: string;
};

export type createFormParameters = {
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
   * Format: 'int64'
   */
  content_id: number;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params?: createFormParameters;
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
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<ContentShare>(
    `/v1/users/{user_id}/content_shares`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
