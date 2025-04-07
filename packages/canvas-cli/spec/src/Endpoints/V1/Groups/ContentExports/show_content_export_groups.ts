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
 * Nickname: show_content_export_groups
 */
export async function show_content_export_groups({
  parameters
}: Options): Promise<ContentExport> {
  return await (
    await fetch(`/v1/groups/{group_id}/content_exports/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
