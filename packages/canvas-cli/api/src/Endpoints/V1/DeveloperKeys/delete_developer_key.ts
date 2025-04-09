import { client } from '../../../Client.js';
import { DeveloperKey } from '../../../Resources/DeveloperKeys.js';

export type delete_developer_keyPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_developer_keyPathParameters;
};

/**
 * Delete a Developer Key
 *
 * Delete an existing Canvas API key. Deleting an LTI 1.3 registration should be
 * done via the LTI Registration API.
 *
 * Nickname: delete_developer_key
 */
export async function delete_developer_key({ pathParams }: Options) {
  return await client().fetchAs<DeveloperKey>(`/v1/developer_keys/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
