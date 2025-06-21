import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { Folder } from '../../../../../Resources/Files.js';

export type updatePathParameters = {
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
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
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
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
