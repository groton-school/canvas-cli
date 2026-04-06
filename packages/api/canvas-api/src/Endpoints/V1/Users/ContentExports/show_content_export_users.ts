import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type show_content_export_usersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type show_content_export_usersSearchParameters = Masquerade;

type Options = (
  | {
      path: show_content_export_usersPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: show_content_export_usersPathParameters;
    }
) &
  (
    | {
        query?: Partial<show_content_export_usersSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<show_content_export_usersSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<show_content_export_usersSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: show_content_export_usersSearchParameters;
        strict: true;
      }
  );

/**
 * Show content export
 *
 * Get information about a single content export.
 *
 * Nickname: show_content_export_users
 */
export async function show_content_export_users(options: Options) {
  const response = await client().fetchAs<ContentExport>(
    `/api/v1/users/{user_id}/content_exports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
