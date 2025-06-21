import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type show_content_export_usersPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  id: string;
};

export type show_content_export_usersSearchParameters = Masquerade;

type Options = {
  pathParams: show_content_export_usersPathParameters;
} & (
  | {
      searchParams?: Partial<show_content_export_usersSearchParameters>;
      strict?: false;
    }
  | {
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
