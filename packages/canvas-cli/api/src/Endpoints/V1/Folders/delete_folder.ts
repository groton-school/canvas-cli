import { client } from '../../../Client.js';

export type delete_folderPathParameters = {
  /** ID */
  id: string;
};

export type delete_folderSearchParameters = Partial<{
  /** Set to 'true' to allow deleting a non-empty folder */
  force: boolean;
}>;

type Options = {
  pathParams: delete_folderPathParameters;
} & (
  | {
      searchParams?: Partial<delete_folderSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_folderSearchParameters;
      strict: true;
    }
);

/**
 * Delete folder
 *
 * Remove the specified folder. You can only delete empty folders unless you set
 * the 'force' flag
 *
 * Nickname: delete_folder
 */
export async function delete_folder(options: Options) {
  return await client().fetchAs<void>(`/api/v1/folders/{id}`, {
    method: 'DELETE',
    ...options
  });
}
