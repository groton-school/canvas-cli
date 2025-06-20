import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Folder } from '../../../../Resources/Files.js';

export type listPathParameters = {
  /** ID */
  id: string;
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
 * List folders
 *
 * Returns the paginated list of folders in the folder.
 *
 * Nickname: list_folders
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Folder[]>(
    `/api/v1/folders/{id}/folders`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
