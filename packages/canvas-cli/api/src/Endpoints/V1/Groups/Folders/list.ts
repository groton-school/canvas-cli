import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /** ID */
  group_id: string;
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
 * List all folders
 *
 * Returns the paginated list of all folders for the given context. This will be
 * returned as a flat list containing all subfolders as well.
 *
 * Nickname: list_all_folders_groups
 */
export async function list(options: Options) {
  return await client().fetchAs<Folder[]>(`/api/v1/groups/{group_id}/folders`, {
    method: 'GET',
    ...options
  });
}
