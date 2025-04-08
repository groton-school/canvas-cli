import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get icon metadata
 *
 * Returns the icon maker file attachment metadata
 *
 * Nickname: get_icon_metadata
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/files/{id}/icon_metadata`, {
    method: 'GET',
    params: parameters
  });
}
