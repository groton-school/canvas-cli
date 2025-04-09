import { client } from '../../../../../Client.js';

type listSearchParameters = {
  /**
   * "ungraded_quizzes":: Optionally include ungraded quizzes (such as
   * practice quizzes and surveys) in the list. These will be returned under a
   * +quiz+ key instead of an +assignment+ key in response elements.
   */
  include: string[];
};

type Options = {
  searchParams?: listSearchParameters;
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
export async function list({ searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/self/todo_item_count`, {
    method: 'GET',
    searchParams
  });
}
