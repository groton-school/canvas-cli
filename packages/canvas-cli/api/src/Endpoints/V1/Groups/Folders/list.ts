import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
  const response = await client().fetchAs<Folder[]>(
    `/api/v1/groups/{group_id}/folders`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
