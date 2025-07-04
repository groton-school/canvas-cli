import { Masquerade } from '@groton/canvas-cli.client.base';
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
 * List counts for todo items
 *
 * Counts of different todo items such as the number of assignments needing
 * grading as well as the number of assignments needing submitting.
 *
 * There is a limit to the number of todo items this endpoint will count. It
 * will only look at the first 100 todo items for the user. If the user has more
 * than 100 todo items this count may not be reliable. The largest reliable
 * number for both counts is 100.
 *
 * Nickname: list_counts_for_todo_items
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/self/todo_item_count`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
