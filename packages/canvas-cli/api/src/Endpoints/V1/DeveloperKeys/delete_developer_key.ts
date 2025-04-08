import { client } from '../../../Client.js';
import { DeveloperKey } from '../../../Resources/DeveloperKeys.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a Developer Key
 *
 * Delete an existing Canvas API key. Deleting an LTI 1.3 registration should be
 * done via the LTI Registration API.
 *
 * Nickname: delete_developer_key
 */
export async function delete_developer_key({ parameters }: Options) {
  return await client().fetchAs<DeveloperKey>(`/v1/developer_keys/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
