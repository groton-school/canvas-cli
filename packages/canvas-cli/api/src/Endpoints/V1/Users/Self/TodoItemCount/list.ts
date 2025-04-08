import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/users/self/todo_item_count`, {
    method: 'GET',
    params: parameters
  });
}
