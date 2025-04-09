import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

export type listSearchParameters = {
  /**
   * Only return items starting from the given date. The value should be
   * formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date
   */
  start_date: string;
  /**
   * Only return items up to the given date. The value should be formatted as:
   * yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
   *
   * Format: date
   */
  end_date: string;
  /**
   * List of context codes of courses and/or groups whose items you want to
   * see. If not specified, defaults to all contexts associated to the current
   * user. Note that concluded courses will be ignored unless specified in the
   * includes[] parameter. The format of this field is the context type,
   * followed by an underscore, followed by the context id. For example:
   * course_42, group_123
   */
  context_codes: string[];
  /**
   * Return planner items for the given observed user. Must be accompanied by
   * context_codes[]. The user making the request must be observing the
   * observed user in all the courses specified by context_codes[].
   */
  observed_user_id: string;
  /** Only return items that have new or unread activity */
  filter: string;
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List planner items
 *
 * Retrieve the paginated list of objects to be shown on the planner for the
 * current user with the associated planner override to override an item's
 * visibility if set.
 *
 * Planner items for a student may also be retrieved by a linked observer. Use
 * the path that accepts a user_id and supply the student's id.
 *
 * Nickname: list_planner_items_users
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/planner/items`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
