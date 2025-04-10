import { Paginated } from '@groton/canvas-cli.client';
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
 * List folders and files
 *
 * Returns the paginated list of folders in the folder and files.
 *
 * Nickname: list_folders_and_files
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/folders/{id}/all`, {
    method: 'GET',
    pathParams
  });
}
