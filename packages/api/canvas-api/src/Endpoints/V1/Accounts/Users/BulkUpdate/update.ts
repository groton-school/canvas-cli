import { JSONObject } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Progress } from '../../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** [Array<Integer>] The IDs of the users to update. */
  user_ids: string;
  /**
   * The attributes to update for each user.
   *
   * Hash
   */
  user: JSONObject;
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
 * Update multiple users
 *
 * Updates multiple users in bulk.
 *
 * Nickname: update_multiple_users
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/accounts/{account_id}/users/bulk_update`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
