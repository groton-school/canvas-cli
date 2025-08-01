import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type show_content_export_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_content_export_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: show_content_export_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<show_content_export_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: show_content_export_groupsSearchParameters;
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
  const response = await client().fetchAs<ContentExport>(
    `/api/v1/groups/{group_id}/content_exports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
