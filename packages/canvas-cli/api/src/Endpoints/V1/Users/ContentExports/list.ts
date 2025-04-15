import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { ContentExport } from '../../../../Resources/ContentExports.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List content exports
 *
 * A paginated list of the past and pending content export jobs for a course,
 * group, or user. Exports are returned newest first.
 *
 * Nickname: list_content_exports_users
 */
export async function list(options: Options) {
  return await client().fetchAs<ContentExport[]>(
    `/api/v1/users/{user_id}/content_exports`,
    {
      method: 'GET',
      ...options
    }
  );
}
