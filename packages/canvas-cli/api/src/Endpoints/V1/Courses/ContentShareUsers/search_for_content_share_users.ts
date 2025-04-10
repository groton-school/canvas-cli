import { Paginated } from '@groton/canvas-cli.client';
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
} & Paginated;

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
export async function search_for_content_share_users({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<User[]>(
    `/v1/courses/{course_id}/content_share_users`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
