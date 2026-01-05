import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * "ungraded_quizzes":: Optionally include ungraded quizzes (such as
     * practice quizzes and surveys) in the list. These will be returned under a
     * +quiz+ key instead of an +assignment+ key in response elements.
     */
    include: string[];
  }>;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List the TODO items
 *
 * A paginated list of the current user's list of todo items.
 *
 * There is a limit to the number of items returned.
 *
 * The `ignore` and `ignore_permanently` URLs can be used to update the user's
 * preferences on what items will be displayed. Performing a DELETE request
 * against the `ignore` URL will hide that item from future todo item requests,
 * until the item changes. Performing a DELETE request against the
 * `ignore_permanently` URL will hide that item forever.
 *
 * Nickname: list_todo_items
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/users/self/todo`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
