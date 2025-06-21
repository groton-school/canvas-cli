import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { ContentShare } from '../../../../Resources/ContentShares.js';

export type updatePathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Read state for the content share */
  read_state: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a content share
 *
 * Mark a content share read or unread
 *
 * Nickname: update_content_share
 */
export async function update(options: Options) {
  const response = await client().fetchAs<ContentShare>(
    `/api/v1/users/{user_id}/content_shares/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
