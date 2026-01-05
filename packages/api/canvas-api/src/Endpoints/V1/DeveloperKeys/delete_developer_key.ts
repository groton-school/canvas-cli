import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { DeveloperKey } from '../../../Resources/DeveloperKeys.js';

export type delete_developer_keyPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_developer_keySearchParameters = Masquerade;

type Options = {
  pathParams: delete_developer_keyPathParameters;
} & (
  | {
      searchParams?: Partial<delete_developer_keySearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_developer_keySearchParameters;
      strict: true;
    }
);

/**
 * Delete a Developer Key
 *
 * Delete an existing Canvas API key. Deleting an LTI 1.3 registration should be
 * done via the LTI Registration API.
 *
 * Nickname: delete_developer_key
 */
export async function delete_developer_key(options: Options) {
  const response = await client().fetchAs<DeveloperKey>(
    `/api/v1/developer_keys/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
