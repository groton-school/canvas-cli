import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** The name of the bookmark */
  name: string;
  /** The url of the bookmark */
  url: string;
  /**
   * The position of the bookmark. Defaults to the bottom.
   *
   * Format: 'int64'
   */
  position: number;
  /** The data associated with the bookmark */
  data: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update bookmark
 *
 * Updates a bookmark
 *
 * Nickname: update_bookmark
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Folder>(
    `/api/v1/users/self/bookmarks/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
