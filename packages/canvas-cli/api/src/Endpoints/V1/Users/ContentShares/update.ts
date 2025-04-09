import { client } from '../../../../Client.js';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type updatePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** Read state for the content share */
  read_state: string;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
};

/**
 * Update a content share
 *
 * Mark a content share read or unread
 *
 * Nickname: update_content_share
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<ContentShare>(
    `/v1/users/{user_id}/content_shares/{id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
