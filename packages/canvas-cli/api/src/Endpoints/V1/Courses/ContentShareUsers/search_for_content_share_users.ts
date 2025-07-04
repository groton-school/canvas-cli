import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type search_for_content_share_usersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type search_for_content_share_usersSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Term used to find users. Will search available share users with the
     * search term in their name.
     */
    search_term: string;
  }>;

type Options = {
  pathParams: search_for_content_share_usersPathParameters;
} & (
  | {
      searchParams?: Partial<search_for_content_share_usersSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: search_for_content_share_usersSearchParameters;
      strict: true;
    }
);

/**
 * Search for content share users
 *
 * Returns a paginated list of users you can share content with. Requires the
 * content share feature and the user must have the manage content permission
 * for the course.
 *
 * Nickname: search_for_content_share_users
 */
export async function search_for_content_share_users(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/content_share_users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
