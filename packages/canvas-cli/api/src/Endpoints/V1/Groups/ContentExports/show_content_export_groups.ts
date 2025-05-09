import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type show_content_export_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_content_export_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Show content export
 *
 * Get information about a single content export.
 *
 * Nickname: show_content_export_groups
 */
export async function show_content_export_groups(options: Options) {
  return await client().fetchAs<ContentExport>(
    `/api/v1/groups/{group_id}/content_exports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
