import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type search_for_content_share_usersPathParameters = {
  /** ID */
  course_id: string;
};

export type search_for_content_share_usersSearchParameters = {
  /**
   * Term used to find users. Will search available share users with the
   * search term in their name.
   */
  search_term: string;
};

type Options = {
  pathParams: search_for_content_share_usersPathParameters;
  searchParams?: search_for_content_share_usersSearchParameters;
};

/**
 * Search for content share users
 *
 * Returns a paginated list of users you can share content with. Requires the
 * content share feature and the user must have the manage content permission
 * for the course.
 *
 * Nickname: search_for_content_share_users
 */
export async function search_for_content_share_users({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/content_share_users`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
