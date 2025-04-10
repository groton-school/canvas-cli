import { client } from '../../../../../Client.js';

export type delete_bookmarkPathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_bookmarkPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete bookmark
 *
 * Deletes a bookmark
 *
 * Nickname: delete_bookmark
 */
export async function delete_bookmark({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/self/bookmarks/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
