import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type remove_content_sharePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type remove_content_shareSearchParameters = Masquerade;

type Options = {
  pathParams: remove_content_sharePathParameters;
} & (
  | {
      searchParams?: Partial<remove_content_shareSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_content_shareSearchParameters;
      strict: true;
    }
);

/**
 * Remove content share
 *
 * Remove a content share from your list. Use +self+ as the user_id. Note that
 * this endpoint does not delete other users' copies of the content share.
 *
 * Nickname: remove_content_share
 */
export async function remove_content_share(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{user_id}/content_shares/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
