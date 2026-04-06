import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: show_content_export_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_content_export_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_content_export_groupsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_content_export_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: show_content_export_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: show_content_export_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
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
