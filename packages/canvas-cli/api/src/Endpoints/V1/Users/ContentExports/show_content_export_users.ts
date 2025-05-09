import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type show_content_export_usersPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: show_content_export_usersPathParameters;
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
 * Nickname: show_content_export_users
 */
export async function show_content_export_users(options: Options) {
  return await client().fetchAs<ContentExport>(
    `/api/v1/users/{user_id}/content_exports/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
