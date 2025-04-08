import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show content export
 *
 * Get information about a single content export.
 *
 * Nickname: show_content_export_users
 */
export async function show_content_export_users({ parameters }: Options) {
  return await client().fetchAs<ContentExport>(
    `/v1/users/{user_id}/content_exports/{id}`,
    { method: 'GET', params: parameters }
  );
}
