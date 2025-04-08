import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove content share
 *
 * Remove a content share from your list. Use +self+ as the user_id. Note that
 * this endpoint does not delete other users' copies of the content share.
 *
 * Nickname: remove_content_share
 */
export async function remove_content_share({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/users/{user_id}/content_shares/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
