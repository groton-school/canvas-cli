import { client } from '../../../../Client.js';

type listPathParameters = {
  /** ID */
  account_id: string;
};

type listSearchParameters = {
  /**
   * - "course_subject_tabs": Optional flag to return the tabs associated with a
   *   canvas_for_elementary subject course's home page instead of the typical
   *   sidebar navigation. Only takes effect if this request is for a course
   *   context in a canvas_for_elementary-enabled account or sub-account.
   */
  include: string[];
};

type Options = {
  pathParams: listPathParameters;
  searchParams?: listSearchParameters;
};

/**
 * List available tabs for a course or group
 *
 * Returns a paginated list of navigation tabs available in the current context.
 *
 * Nickname: list_available_tabs_for_course_or_group_accounts
 */
export async function list({ pathParams, searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/tabs`, {
    method: 'GET',
    pathParams,
    searchParams
  });
}
